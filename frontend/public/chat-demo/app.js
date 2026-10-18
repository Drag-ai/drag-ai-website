const templates = {
  general: {
    name: 'General business assistant',
    description: 'Answer everyday questions using the business details provided.',
    welcome: 'Hi, I’m the business assistant. What can I help you with today?',
    prompts: ['What can your team help me with?', 'I have a question about your service.', 'Can someone from your team follow up with me?'],
  },
  lead_qualification: {
    name: 'Sales & lead qualification',
    description: 'Understand a prospect’s need, fit, and preferred next step.',
    welcome: 'Hello. I can help you explore the right service and connect you with the team. What are you looking to accomplish?',
    prompts: ['I’m looking for help with a business process.', 'Can you tell me which service might fit my needs?', 'I’d like to speak with your team.'],
  },
  customer_support: {
    name: 'Customer support',
    description: 'Clarify an issue, share verified guidance, and route unresolved questions.',
    welcome: 'Hi, I’m here to help. What do you need a hand with?',
    prompts: ['I need help with a recent order.', 'Where can I find your support policy?', 'I’d like a team member to help me.'],
  },
  appointment_request: {
    name: 'Appointment requests',
    description: 'Collect the service and preferred time so a person can confirm it.',
    welcome: 'Hello. I can note an appointment request for the team to confirm. What would you like to arrange?',
    prompts: ['I’d like to arrange a consultation.', 'Can I request a call next week?', 'What information do you need to arrange a visit?'],
  },
  faq: {
    name: 'Product & service FAQs',
    description: 'Give short, consistent answers from the facts your business supplies.',
    welcome: 'Hi. Ask me about the products or services, and I’ll answer using the information available to me.',
    prompts: ['What services do you offer?', 'How does your process work?', 'Do you have information about pricing?'],
  },
  feedback: {
    name: 'Feedback & surveys',
    description: 'Invite brief, unbiased feedback and capture the key points.',
    welcome: 'Hello. I’m collecting feedback to help the team improve. How has your experience been so far?',
    prompts: ['I have feedback about my experience.', 'Can I share an idea for improvement?', 'I’d like someone to follow up about my feedback.'],
  },
};

const MAX_MESSAGES = 6;
const voiceMode = new URLSearchParams(window.location.search).get('mode') === 'voice';
const requestedTemplate = new URLSearchParams(window.location.search).get('templateId');
const initialTemplate = Object.prototype.hasOwnProperty.call(templates, requestedTemplate) ? requestedTemplate : 'general';
const state = {
  sessionId: crypto.randomUUID(),
  templateId: initialTemplate,
  businessProfile: {},
  history: [],
  messagesUsed: 0,
  processing: false,
  lastAssistantReply: '',
};
const messages = document.querySelector('#messages');
const input = document.querySelector('#message-input');
const form = document.querySelector('#chat-form');
const voiceButton = document.querySelector('#voice-button');
const listenButton = document.querySelector('#listen-button');
const voiceStatus = document.querySelector('#voice-status');
document.querySelector('.voice-actions').hidden = !voiceMode;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let listening = false;

function setVoiceStatus(message) {
  voiceStatus.textContent = message;
}

function speakText(text) {
  if (!('speechSynthesis' in window) || !text) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = navigator.language || 'en-US';
  window.speechSynthesis.speak(utterance);
}

function updateListeningState(active) {
  listening = active;
  voiceButton.setAttribute('aria-pressed', String(active));
  voiceButton.textContent = active ? 'Stop' : 'Speak';
  if (!active && voiceMode) voiceButton.focus();
}

if (voiceMode) {
  document.title = 'Drag Voice | Interactive Voice Demo';
  document.querySelector('#product-title').textContent = 'Drag Voice';
  document.querySelector('#demo-label').textContent = 'Interactive voice preview';
  document.querySelector('#conversation-heading').textContent = 'Try a business voice conversation';
  document.querySelector('#voice-help').hidden = false;
  document.querySelector('#demo-footnote').textContent = 'This is an in-browser product preview, not an outbound phone call. Replies are generated from the selected template and example business details.';
  voiceButton.hidden = !SpeechRecognition;
  listenButton.hidden = !('speechSynthesis' in window);
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.lang = navigator.language || 'en-US';
    recognition.onstart = () => {
      updateListeningState(true);
      setVoiceStatus('Listening…');
    };
    recognition.onresult = (event) => {
      const transcript = event.results?.[0]?.[0]?.transcript?.trim();
      if (transcript) {
        input.value = transcript;
        sendMessage(transcript);
        setVoiceStatus('Replying…');
      }
    };
    recognition.onerror = (event) => {
      const message = event.error === 'not-allowed' || event.error === 'service-not-allowed'
        ? 'Allow microphone access to speak, or type a message instead.'
        : event.error === 'no-speech'
          ? 'No speech detected. Try again or type a message.'
          : 'Voice input is unavailable. You can type a message instead.';
      setVoiceStatus(message);
    };
    recognition.onend = () => updateListeningState(false);
  } else {
    setVoiceStatus('Voice input is not supported in this browser. Type a message and use Listen to hear the reply.');
  }
}

function addMessage(text, role) {
  const item = document.createElement('div');
  item.className = `message ${role}`;
  item.innerHTML = role === 'assistant' ? '<div class="avatar">DA</div><p></p>' : '<p></p>';
  updateMessage(item, text, role);
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight;
  return item;
}

function escapeHtml(text) {
  return String(text).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}
function formatAssistantText(text) { return escapeHtml(text).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>'); }
function updateMessage(item, text, role) { item.querySelector('p').innerHTML = role === 'assistant' ? formatAssistantText(text) : escapeHtml(text); }
function updateTemplateDetails() {
  const template = templates[state.templateId];
  document.querySelector('#template-name').textContent = template.name;
  document.querySelector('#template-description').textContent = template.description;
  const promptRow = document.querySelector('#prompt-row');
  promptRow.replaceChildren(...template.prompts.map((prompt) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = prompt;
    button.addEventListener('click', () => sendMessage(prompt));
    return button;
  }));
}

function updateMessageCount(remaining = MAX_MESSAGES - state.messagesUsed) {
  const safeRemaining = Math.max(0, Math.min(MAX_MESSAGES, Number(remaining)));
  state.messagesUsed = MAX_MESSAGES - safeRemaining;
  document.querySelector('#message-count').textContent = `${safeRemaining} message${safeRemaining === 1 ? '' : 's'} left`;
  input.disabled = state.processing || safeRemaining === 0;
  document.querySelector('#send-button').disabled = state.processing || safeRemaining === 0;
  voiceButton.disabled = state.processing || safeRemaining === 0 || !recognition;
  document.querySelector('#reset').disabled = state.processing;
  document.querySelector('#template-select').disabled = state.processing;
  document.querySelector('#profile-form button[type="submit"]').disabled = state.processing;
  if (safeRemaining === 0) input.placeholder = 'Start a new demo to try another conversation';
}

function resetConversation() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  state.sessionId = crypto.randomUUID();
  state.history = [];
  state.messagesUsed = 0;
  messages.replaceChildren();
  input.value = '';
  input.placeholder = 'Type a question...';
  updateMessageCount();
  updateTemplateDetails();
  state.lastAssistantReply = templates[state.templateId].welcome;
  addMessage(state.lastAssistantReply, 'assistant');
  if (voiceMode) setVoiceStatus(recognition
    ? 'Choose Speak to use your microphone, or type a message.'
    : 'Voice input is not supported in this browser. Type a message and use Listen to hear the reply.');
}

async function sendMessage(text) {
  const message = text.trim();
  if (!message || state.messagesUsed >= MAX_MESSAGES) return;
  addMessage(message, 'user');
  input.value = '';
  input.disabled = true;
  document.querySelector('#send-button').disabled = true;
  state.processing = true;
  state.messagesUsed += 1;
  updateMessageCount(MAX_MESSAGES - state.messagesUsed);
  const profile = Object.fromEntries(Object.entries(state.businessProfile).filter(([, value]) => value));
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
      body: JSON.stringify({ sessionId: state.sessionId, message, templateId: state.templateId, businessProfile: profile, history: state.history }),
    });
    if (!response.ok) {
      const payload = await response.json().catch(() => ({}));
      if (response.status === 429) updateMessageCount(0);
      throw new Error(payload.message || 'The assistant could not process that message.');
    }
    const remaining = response.headers.get('X-Demo-Messages-Remaining');
    if (remaining !== null) updateMessageCount(remaining);
    const assistantItem = addMessage('', 'assistant');
    let assistantText = '';
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const chunk = await reader.read();
      if (chunk.done) break;
      buffer += decoder.decode(chunk.value, { stream: true });
      const events = buffer.split('\n\n');
      buffer = events.pop();
      for (const event of events) {
        const line = event.split('\n').find((value) => value.startsWith('data: '));
        if (!line) continue;
        const payload = JSON.parse(line.slice(6));
        if (payload.type === 'delta') {
          assistantText += payload.text;
          updateMessage(assistantItem, assistantText, 'assistant');
          messages.scrollTop = messages.scrollHeight;
        }
        if (payload.type === 'done') {
          // The server sends this marker after the final streamed reply.
        }
      }
    }
    state.lastAssistantReply = assistantText.trim();
    if (state.lastAssistantReply) {
      state.history.push({ role: 'user', content: message }, { role: 'assistant', content: state.lastAssistantReply });
    }
    if (voiceMode && state.lastAssistantReply) speakText(state.lastAssistantReply);
    if (voiceMode) setVoiceStatus('You can speak again or type a message.');
  } catch (error) {
    addMessage(error.message, 'assistant');
    if (voiceMode) setVoiceStatus('The reply could not be generated. Please try again.');
  } finally {
    state.processing = false;
    updateMessageCount(MAX_MESSAGES - state.messagesUsed);
    if (state.messagesUsed < MAX_MESSAGES) {
      input.focus();
    }
  }
}

form.addEventListener('submit', (event) => { event.preventDefault(); sendMessage(input.value); });
document.querySelector('#template-select').addEventListener('change', (event) => {
  state.templateId = event.target.value;
  resetConversation();
});
document.querySelector('#profile-form').addEventListener('submit', (event) => {
  event.preventDefault();
  state.businessProfile = {
    companyName: document.querySelector('#company-name').value.trim(),
    offer: document.querySelector('#company-offer').value.trim(),
    knowledge: document.querySelector('#company-knowledge').value.trim(),
  };
  resetConversation();
});
document.querySelector('#reset').addEventListener('click', resetConversation);
voiceButton.addEventListener('click', () => {
  if (!recognition || state.processing) return;
  if (listening) recognition.stop();
  else {
    try {
      recognition.start();
    } catch {
      setVoiceStatus('Voice input is already starting. Please wait a moment.');
    }
  }
});
listenButton.addEventListener('click', () => speakText(state.lastAssistantReply));
window.addEventListener('beforeunload', () => {
  if (recognition && listening) recognition.stop();
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
});
document.querySelector('#template-select').value = state.templateId;
updateTemplateDetails();
resetConversation();
