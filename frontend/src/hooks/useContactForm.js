import { useState } from 'react';

// Read the Web3Forms access key from environment.
// Falls back to the previously-configured key only if no env var is set, so the form keeps working.
const WEB3FORMS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'af781fa2-7ab3-4154-8aee-f123f4ae54c5';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const INITIAL_FORM = {
  name: '',
  company: '',
  email: '',
  phone: '',
  automation: '',
  currentTools: '',
  budget: '',
  timeline: '',
  consent: false,
};

const buildPayload = (formData) => ({
  access_key: WEB3FORMS_KEY,
  subject: `AI Strategy Call request from ${formData.name}`,
  from_name: 'Drag AI Lead Form',
  email: formData.email,
  reply_to: formData.email,
  name: formData.name,
  company: formData.company,
  phone_or_whatsapp: formData.phone,
  what_to_automate: formData.automation,
  current_tools: formData.currentTools,
  budget_range: formData.budget,
  timeline: formData.timeline,
  botcheck: false,
});

const postForm = async (formData) => {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(buildPayload(formData)),
  });
  const result = await response.json().catch(() => ({}));
  return { ok: response.ok && result.success };
};

/**
 * Encapsulates the lead-capture form's local state, validation, and submission.
 * Used by both the homepage lead form and the dedicated Contact page.
 */
export const useContactForm = ({ onSuccess, onError } = {}) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const reset = () => {
    setFormData(INITIAL_FORM);
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      onError?.('consent_required');
      return;
    }

    setIsSubmitting(true);
    try {
      const { ok } = await postForm(formData);
      if (ok) {
        setIsSuccess(true);
        setFormData(INITIAL_FORM);
        onSuccess?.();
      } else {
        onError?.('submission_failed');
      }
    } catch (err) {
      onError?.('network_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    reset,
    setIsSuccess,
  };
};
