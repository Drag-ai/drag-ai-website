import { act, renderHook } from '@testing-library/react';
import { useContactForm } from '../../hooks/useContactForm';

describe('useContactForm', () => {
  afterEach(() => jest.restoreAllMocks());

  test('requires consent before submitting', async () => {
    const onError = jest.fn();
    const fetchMock = jest.spyOn(global, 'fetch');
    const { result } = renderHook(() => useContactForm({ onError }));

    await act(async () => result.current.handleSubmit({ preventDefault: jest.fn() }));

    expect(onError).toHaveBeenCalledWith('consent_required');
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test('shows success and resets the form after a successful provider response', async () => {
    const onSuccess = jest.fn();
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });
    const { result } = renderHook(() => useContactForm({ onSuccess, initialAutomation: 'Ask about Drag Chat' }));

    await act(async () => result.current.handleChange({
      target: { name: 'consent', type: 'checkbox', checked: true },
    }));

    await act(async () => result.current.handleSubmit({ preventDefault: jest.fn() }));

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    expect(result.current.isSuccess).toBe(true);
    expect(result.current.formData.automation).toBe('Ask about Drag Chat');
    expect(result.current.isSubmitting).toBe(false);
  });

  test('reports provider failures without marking the form successful', async () => {
    const onError = jest.fn();
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ success: false }),
    });
    const { result } = renderHook(() => useContactForm({ onError }));

    await act(async () => result.current.handleChange({
      target: { name: 'consent', type: 'checkbox', checked: true },
    }));

    await act(async () => result.current.handleSubmit({ preventDefault: jest.fn() }));

    expect(onError).toHaveBeenCalledWith('submission_failed');
    expect(result.current.isSuccess).toBe(false);
    expect(result.current.isSubmitting).toBe(false);
  });
});
