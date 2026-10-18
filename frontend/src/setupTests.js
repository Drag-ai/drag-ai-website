import '@testing-library/jest-dom';

// CRA's Node test environment does not expose Fetch API globals. These small
// test-only shims cover the Request/Response surface used by Pages handlers.
const { TextDecoder, TextEncoder } = require('node:util');
const { ReadableStream } = require('node:stream/web');
Object.assign(global, { TextDecoder, TextEncoder, ReadableStream });
global.crypto = require('node:crypto').webcrypto;
global.btoa = (value) => Buffer.from(value, 'binary').toString('base64');

class TestHeaders {
  constructor(values = {}) {
    this.values = new Map(Object.entries(values).map(([key, value]) => [key.toLowerCase(), String(value)]));
  }

  get(name) { return this.values.get(String(name).toLowerCase()) || null; }
  set(name, value) { this.values.set(String(name).toLowerCase(), String(value)); }
}

class TestRequest {
  constructor(url, init = {}) {
    this.url = String(url);
    this.method = init.method || 'GET';
    this.headers = new TestHeaders(init.headers);
    this.body = init.body ?? null;
  }

  async json() { return JSON.parse(this.body || 'null'); }
}

class TestResponse {
  constructor(body = null, init = {}) {
    this.status = init.status || 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.headers = new TestHeaders(init.headers);
    this.body = body instanceof ReadableStream
      ? body
      : new ReadableStream({
        start(controller) {
          if (body !== null) controller.enqueue(new TextEncoder().encode(String(body)));
          controller.close();
        },
      });
  }

  async text() {
    const reader = this.body.getReader();
    const decoder = new TextDecoder();
    let result = '';
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) return result + decoder.decode();
      result += decoder.decode(chunk.value, { stream: true });
    }
  }

  async json() { return JSON.parse(await this.text()); }
}

global.Request = TestRequest;
global.Response = TestResponse;
global.fetch = jest.fn(() => Promise.reject(new Error('Unexpected network request in a unit test')));
