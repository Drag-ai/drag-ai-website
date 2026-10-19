import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, AudioLines, Building2, Check, Circle, Clock3,
  FileUp, History, LockKeyhole, MessageSquareText, PhoneCall, PhoneOff,
  Plus, Save, ShieldCheck, Sparkles, Trash2, X,
} from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

const templates = [
  {
    id: 'sales_follow_up', name: 'Sales follow-up', category: 'Growth', icon: '↗',
    description: 'Understand interest and agree a useful next step.',
    objective: 'Understand what the person is looking for, answer only from the approved business context, and offer a human follow-up when useful.',
    opening: "Hello, I'm an AI assistant calling for {business}. Is now a good time for a short conversation?",
    guidance: 'Ask one question at a time. Learn what outcome the person wants. Do not make claims about price, availability, or results unless they appear in the approved context. Offer to pass a request to the team; do not say that a follow-up has already been arranged.',
  },
  {
    id: 'customer_support', name: 'Customer support', category: 'Service', icon: '◌',
    description: 'Listen, clarify the issue, and route the next step.',
    objective: "Understand the person's question, share relevant approved information, and identify when a team member should help.",
    opening: "Hi, I'm an AI assistant calling for {business}. Is this a good time to help with a question?",
    guidance: 'Be patient and clear. Ask what help is needed, then summarize the request. You cannot access accounts, change services, or guarantee a resolution. Offer a human follow-up for account-specific or unresolved issues.',
  },
  {
    id: 'appointment_request', name: 'Appointment request', category: 'Operations', icon: '◷',
    description: 'Collect a preferred time for a person to confirm.',
    objective: 'Find out whether the person wants to speak with the team and note their preferred day or time window.',
    opening: "Hello, I'm an AI assistant calling for {business}. Would you like to share a good time for the team to speak with you?",
    guidance: 'Treat any day or time as a preference only. You have no calendar access and cannot confirm, book, or change an appointment. Repeat the preference back and explain that a person must confirm it.',
  },
  {
    id: 'feedback_follow_up', name: 'Feedback & retention', category: 'Experience', icon: '✳',
    description: 'Invite feedback and understand what could improve.',
    objective: "Invite a brief, voluntary comment about the person's experience and understand whether they want a team member to follow up.",
    opening: "Hello, I'm an AI assistant calling for {business}. Do you have a moment to share a little feedback?",
    guidance: 'Keep the conversation respectful and brief. Do not pressure the person to continue. Ask what went well or what could be better, acknowledge their answer, and offer human follow-up without promising an outcome.',
  },
  {
    id: 'reminder_follow_up', name: 'Reminder & follow-up', category: 'Operations', icon: '◉',
    description: 'Share a simple reminder and check for questions.',
    objective: 'Deliver the reminder information supplied in the approved business context and ask whether the person has a question.',
    opening: "Hello, I'm an AI assistant calling for {business} with a brief reminder. Is now a convenient time?",
    guidance: 'Only repeat reminder details present in the approved context. Do not imply a payment is due, create urgency, or claim an action has been completed. Offer a person as the next step if anything is unclear.',
  },
  {
    id: 'general_inquiry', name: 'General inquiry', category: 'General', icon: '◎',
    description: 'Have a helpful, open-ended business conversation.',
    objective: 'Understand why the person is speaking with the business and provide a clear, helpful next step.',
    opening: "Hello, I'm an AI assistant calling for {business}. What would be most useful to discuss today?",
    guidance: 'Listen first and ask concise follow-up questions. Use only the approved facts. If you do not know something, say so and offer to pass the question to a person.',
  },
];

const defaultPlaybooks = Object.fromEntries(templates.map(({ id, objective, opening, guidance }) => [
  id, { objective, opening, guidance },
]));
const finishMessages = {
  completed: 'The call ended.', canceled: 'The call was canceled before it connected.',
  busy: 'The number was busy.', failed: 'The call could not connect.',
  'no-answer': 'There was no answer.',
};
const outcomeLabels = {
  '': 'Not set', follow_up: 'Follow-up requested', interested: 'Interested',
  completed: 'Completed', no_answer: 'No answer', not_interested: 'Not interested',
    do_not_call: 'Do not call',
};

const jsonRequest = (body) => ({
  method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body),
});

function Field({ id, label, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-[#e8e4ef]">{label}</label>
      {children}
      {hint && <p className="mt-1.5 text-xs leading-relaxed text-[#9893a6]">{hint}</p>}
    </div>
  );
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '"' && quoted && text[index + 1] === '"') { cell += '"'; index += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === ',' && !quoted) { row.push(cell.trim()); cell = ''; }
    else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && text[index + 1] === '\n') index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = []; cell = '';
    } else cell += char;
  }
  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  if (!rows.length) return [];

  const normalizePhone = (value) => {
    const trimmed = String(value || '').trim();
    const phone = `${trimmed.startsWith('+') ? '+' : ''}${trimmed.replace(/[^\d]/g, '')}`;
    return /^\+[1-9]\d{7,14}$/.test(phone) ? phone : '';
  };
  const header = rows[0].map((value) => value.toLowerCase().replace(/[^a-z]/g, ''));
  const phoneIndex = header.findIndex((value) => ['phone', 'phonenumber', 'mobile', 'mobilenumber', 'telephone', 'destination', 'number'].includes(value));
  const nameIndex = header.findIndex((value) => ['name', 'contactname', 'fullname', 'firstandlastname'].includes(value));
  const hasHeaders = phoneIndex >= 0;
  const candidates = hasHeaders
    ? rows.slice(1).map((values) => ({ name: nameIndex >= 0 ? values[nameIndex] || '' : '', phone: normalizePhone(values[phoneIndex]) }))
    : rows.flatMap((values) => values.map((value) => ({ name: '', phone: normalizePhone(value) })).filter((item) => item.phone));
  const unique = new Map();
  for (const item of candidates) if (item.phone && !unique.has(item.phone)) unique.set(item.phone, item);
  return Array.from(unique.values());
}

function VoiceDemo() {
  const [templateId, setTemplateId] = useState(templates[0].id);
  const [businessName, setBusinessName] = useState('');
  const [businessContext, setBusinessContext] = useState('');
  const [playbooks, setPlaybooks] = useState(defaultPlaybooks);
  const [available, setAvailable] = useState(false);
  const [checking, setChecking] = useState(true);
  const [accessCode, setAccessCode] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authing, setAuthing] = useState(false);
  const [starting, setStarting] = useState(false);
  const [ending, setEnding] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');
  const [activeCall, setActiveCall] = useState(null);
  const [callStatus, setCallStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [transcript, setTranscript] = useState([]);
  const [history, setHistory] = useState([]);
  const [expandedRecord, setExpandedRecord] = useState('');
  const [historyTranscript, setHistoryTranscript] = useState([]);
  const [notesDraft, setNotesDraft] = useState({});
  const [destination, setDestination] = useState('');
  const [queue, setQueue] = useState([]);
  const [consentConfirmed, setConsentConfirmed] = useState(false);
  const [queueMessage, setQueueMessage] = useState('');
  const [recordMessage, setRecordMessage] = useState('');

  const selectedTemplate = templates.find((item) => item.id === templateId) || templates[0];
  const selectedPlaybook = playbooks[templateId] || defaultPlaybooks[templateId];
  const callIsActive = Boolean(activeCall);
  const callLabel = callIsActive
    ? (callStatus === 'in-progress' ? 'Live conversation' : 'Calling selected number')
    : (callStatus === 'idle' ? 'Ready to call' : (finishMessages[callStatus] || 'Call ended'));

  useSEO({
    title: 'Drag Voice Workspace | Live AI Calling Demo',
    description: 'Configure a general-purpose AI calling playbook, import a contact list, place an authorized live call, and review transcripts and call outcomes.',
    canonical: '/voice-demo',
  });

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/voice-demo-call', { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : { available: false }))
      .then((result) => setAvailable(Boolean(result.available)))
      .catch(() => setAvailable(false))
      .finally(() => setChecking(false));
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!activeCall || !accessCode) return undefined;
    let cancelled = false;
    let timer;
    const poll = async () => {
      try {
        const [statusResponse, transcriptResponse] = await Promise.all([
          fetch('/api/voice-demo-call-control', jsonRequest({
            action: 'status', accessCode, callSid: activeCall.callSid, sessionId: activeCall.sessionId,
          })),
          fetch('/api/voice-demo-transcript', jsonRequest({
            accessCode, callSid: activeCall.callSid, sessionId: activeCall.sessionId,
          })),
        ]);
        const [statusResult, transcriptResult] = await Promise.all([
          statusResponse.json().catch(() => ({})), transcriptResponse.json().catch(() => ({})),
        ]);
        if (cancelled) return;
        if (transcriptResponse.ok && Array.isArray(transcriptResult.messages)) setTranscript(transcriptResult.messages);
        if (statusResponse.ok && !statusResult.active) {
          setCallStatus(statusResult.status || 'completed');
          setMessage(finishMessages[statusResult.status] || 'The call ended.');
          setQueue((items) => items.map((item) => (item.phone === activeCall.destination
            ? { ...item, status: statusResult.status || 'completed', sessionId: activeCall.sessionId } : item)));
          setActiveCall(null);
          const recordsResponse = await fetch('/api/voice-workspace', jsonRequest({ action: 'records', accessCode }));
          const recordsResult = await recordsResponse.json().catch(() => ({}));
          if (recordsResponse.ok) setHistory(recordsResult.calls || []);
          return;
        }
        if (statusResponse.ok) {
          setCallStatus(statusResult.status || 'initiated');
          setMessage(statusResult.status === 'in-progress'
            ? 'Connected. Continue the conversation on the phone.'
            : 'The selected number is ringing.');
        } else if (statusResult.message) setMessage(statusResult.message);
      } catch {
        if (!cancelled) setMessage('Call status is temporarily unavailable. You can still end the call here.');
      }
      if (!cancelled) timer = setTimeout(poll, 2800);
    };
    poll();
    return () => { cancelled = true; clearTimeout(timer); };
  }, [activeCall, accessCode]);

  useEffect(() => {
    if (!expandedRecord || !accessCode) { setHistoryTranscript([]); return undefined; }
    const record = history.find((item) => item.session_id === expandedRecord);
    if (!record?.call_sid) { setHistoryTranscript([]); return undefined; }
    const controller = new AbortController();
    fetch('/api/voice-demo-transcript', {
      ...jsonRequest({ accessCode, callSid: record.call_sid, sessionId: record.session_id }),
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : { messages: [] }))
      .then((result) => setHistoryTranscript(Array.isArray(result.messages) ? result.messages : []))
      .catch(() => setHistoryTranscript([]));
    return () => controller.abort();
  }, [expandedRecord, history, accessCode]);

  const chooseTemplate = (template) => {
    setTemplateId(template.id);
    setSaveStatus('');
    setMessage('');
  };

  const updatePlaybook = (key, value) => {
    setPlaybooks((current) => ({
      ...current,
      [templateId]: { ...(current[templateId] || defaultPlaybooks[templateId]), [key]: value },
    }));
    setSaveStatus('');
  };

  const withWorkspace = async (action, extra = {}) => fetch('/api/voice-workspace', jsonRequest({
    action, accessCode: accessCode.trim(), ...extra,
  }));

  const unlockWorkspace = async (event) => {
    event.preventDefault();
    if (!accessCode.trim() || authing) return;
    setAuthing(true);
    setMessage('');
    try {
      const response = await withWorkspace('authenticate');
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'The workspace could not be unlocked.');
      if (result.settings) {
        setTemplateId(result.settings.templateId || templates[0].id);
        setBusinessName(result.settings.businessName || '');
        setBusinessContext(result.settings.businessContext || '');
        setPlaybooks({ ...defaultPlaybooks, ...(result.settings.playbooks || {}) });
      }
      setHistory(result.calls || []);
      setAuthenticated(true);
    } catch (error) {
      setMessage(error.message || 'The workspace could not be unlocked.');
    } finally { setAuthing(false); }
  };

  const lockWorkspace = () => {
    if (callIsActive) return;
    setAuthenticated(false);
    setAccessCode('');
    setQueue([]);
    setConsentConfirmed(false);
    setExpandedRecord('');
    setMessage('');
  };

  const saveWorkspace = async () => {
    if (saving || !authenticated) return;
    setSaving(true);
    setSaveStatus('');
    try {
      const response = await withWorkspace('save', {
        templateId, businessName, businessContext, playbooks,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Setup could not be saved.');
      setSaveStatus('Setup saved to this private workspace.');
    } catch (error) { setSaveStatus(error.message || 'Setup could not be saved.'); }
    finally { setSaving(false); }
  };

  const addDestination = (contact) => {
    const phone = contact.phone.trim();
    if (!/^\+[1-9]\d{7,14}$/.test(phone)) {
      setQueueMessage('Use an international number with country code, such as +14155550123.');
      return false;
    }
    if (queue.some((item) => item.phone === phone)) {
      setQueueMessage('That number is already in your queue.');
      return false;
    }
    if (queue.length >= 50) {
      setQueueMessage('The private queue is limited to 50 numbers.');
      return false;
    }
    setQueue((items) => [...items, { name: contact.name?.trim().slice(0, 100) || '', phone, status: 'ready' }]);
    setQueueMessage('Added. Choose a number and start each call manually.');
    return true;
  };

  const importCsv = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    if (file.size > 1_000_000) { setQueueMessage('Choose a CSV file smaller than 1 MB.'); return; }
    try {
      const imported = parseCsv(await file.text());
      if (!imported.length) { setQueueMessage('No valid international phone numbers were found. Add a phone or mobile column with numbers in +country-code format.'); return; }
      const room = Math.max(0, 50 - queue.length);
      const additions = imported.filter((item) => !queue.some((queued) => queued.phone === item.phone)).slice(0, room);
      setQueue((items) => [...items, ...additions.map((item) => ({ ...item, status: 'ready' }))]);
      setQueueMessage(`${additions.length} contact${additions.length === 1 ? '' : 's'} added. The CSV is read in this browser only; no calls start automatically.`);
    } catch { setQueueMessage('This CSV could not be read. Save it as a standard CSV file and try again.'); }
  };

  const startCall = async (event) => {
    event.preventDefault();
    if (!authenticated || !consentConfirmed || !accessCode.trim() || starting || callIsActive) return;
    const toNumber = destination.trim();
    if (!/^\+[1-9]\d{7,14}$/.test(toNumber)) {
      setMessage('Enter a valid international phone number, such as +14155550123.');
      return;
    }
    setStarting(true);
    setMessage('');
    setTranscript([]);
    try {
      const response = await fetch('/api/voice-demo-call', jsonRequest({
        accessCode: accessCode.trim(), toNumber, consentConfirmed,
        templateId, businessName: businessName.trim(), businessContext: businessContext.trim(),
        objective: selectedPlaybook.objective.trim(), opening: selectedPlaybook.opening.trim(),
        guidance: selectedPlaybook.guidance.trim(),
      }));
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'The call could not be started. Please try again.');
      if (!result.callSid || !result.sessionId) throw new Error('The call was accepted, but its controls could not be opened. It will end automatically within five minutes.');
      setActiveCall({ callSid: result.callSid, sessionId: result.sessionId, destination: toNumber });
      setCallStatus('initiated');
      setQueue((items) => items.map((item) => (item.phone === toNumber
        ? { ...item, status: 'initiated', sessionId: result.sessionId } : item)));
      setMessage(result.message || 'Twilio is attempting to ring the selected number.');
      const recordsResponse = await withWorkspace('records');
      const recordsResult = await recordsResponse.json().catch(() => ({}));
      if (recordsResponse.ok) setHistory(recordsResult.calls || []);
    } catch (error) { setMessage(error.message || 'The call could not be started. Please try again.'); }
    finally { setStarting(false); }
  };

  const endCall = async () => {
    if (!activeCall || ending) return;
    setEnding(true);
    try {
      const response = await fetch('/api/voice-demo-call-control', jsonRequest({
        action: 'end', accessCode, callSid: activeCall.callSid, sessionId: activeCall.sessionId,
      }));
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'The call could not be ended. Please try again.');
      setCallStatus(result.status || 'completed');
      setMessage('The call ended.');
      setQueue((items) => items.map((item) => (item.phone === activeCall.destination
        ? { ...item, status: result.status || 'completed' } : item)));
      setActiveCall(null);
      const recordsResponse = await withWorkspace('records');
      const recordsResult = await recordsResponse.json().catch(() => ({}));
      if (recordsResponse.ok) setHistory(recordsResult.calls || []);
    } catch (error) { setMessage(error.message || 'The call could not be ended. Please try again.'); }
    finally { setEnding(false); }
  };

  const updateRecord = async (record) => {
    setRecordMessage('');
    const draft = notesDraft[record.session_id] || { outcome: record.outcome || '', notes: record.notes || '' };
    try {
      const response = await withWorkspace('update_record', {
        sessionId: record.session_id, outcome: draft.outcome, notes: draft.notes,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'The call record could not be saved.');
      setRecordMessage('Call record saved.');
      const recordsResponse = await withWorkspace('records');
      const recordsResult = await recordsResponse.json().catch(() => ({}));
      if (recordsResponse.ok) setHistory(recordsResult.calls || []);
    } catch (error) { setRecordMessage(error.message || 'The call record could not be saved.'); }
  };

  const clearHistory = async () => {
    if (callIsActive || !window.confirm('Delete all saved call history, transcripts, and Do not call markers? This cannot be undone.')) return;
    try {
      const response = await withWorkspace('clear_history');
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.message || 'Call history could not be cleared.');
      setHistory([]); setExpandedRecord(''); setRecordMessage('Call history and transcripts deleted.');
    } catch (error) { setRecordMessage(error.message || 'Call history could not be cleared.'); }
  };

  const formattedHistory = useMemo(() => history.map((record) => ({
    ...record,
    localTime: new Date(record.created_at).toLocaleString(),
  })), [history]);

  return (
    <div className="min-h-screen bg-[#0b0a10] text-[#f5f2fa]">
      <header className="border-b border-white/[0.08] bg-[#0d0c13]">
        <div className="mx-auto flex min-h-[68px] w-full max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-8">
          <Link to="/products" className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300"><AudioLines className="h-5 w-5" /></span>
            <span className="text-sm font-semibold tracking-wide">Drag AI <span className="ml-1 font-normal text-[#888397]">/ Voice workspace</span></span>
          </Link>
          <div className="flex items-center gap-4">
            {authenticated && <button type="button" onClick={lockWorkspace} disabled={callIsActive} className="text-xs text-[#b9b4c5] hover:text-white disabled:opacity-40">Lock workspace</button>}
            <Link to="/products" className="inline-flex items-center gap-2 text-sm text-[#b9b4c5] transition hover:text-white"><ArrowLeft className="h-4 w-4" />Back to products</Link>
          </div>
        </div>
      </header>

      <main id="voice-workspace-main" className="mx-auto w-full max-w-[1440px] px-4 pb-12 pt-8 sm:px-8 sm:pt-10">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-200"><Sparkles className="h-3.5 w-3.5" />Drag Voice · Private call workspace</div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Run a useful business conversation.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#aaa5b6] sm:text-base">Set up a general-purpose call assistant, choose one authorized contact, and review the conversation and outcome in one place.</p>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#a9a4b4]"><ShieldCheck className="h-4 w-4 text-emerald-300" />Private access · one active call · 30-day history</div>
        </div>

        {!authenticated ? (
          <section className="mx-auto max-w-xl rounded-2xl border border-violet-300/20 bg-[#111018] p-6 shadow-[0_20px_70px_rgba(0,0,0,.25)] sm:p-8">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-200"><LockKeyhole className="h-5 w-5" /></div>
            <h2 className="text-xl font-semibold">Unlock the private workspace</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#a19bad]">Use your temporary access code to open saved setup, call controls, and call history. The code stays in this page memory and is cleared when you lock it.</p>
            <form onSubmit={unlockWorkspace} className="mt-6 space-y-3">
              <Field id="voice-access-code" label="Temporary access code">
                <input id="voice-access-code" type="password" autoComplete="one-time-code" maxLength={128} value={accessCode} onChange={(event) => setAccessCode(event.target.value)} placeholder="Enter your access code" className="h-11 w-full rounded-lg border border-white/[0.11] bg-[#0b0a10] px-3 text-sm text-white outline-none transition placeholder:text-[#686274] focus:border-violet-400/70" />
              </Field>
              <button type="submit" disabled={!available || checking || authing || !accessCode.trim()} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-violet-500 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-violet-900/50 disabled:text-violet-200/55">{authing ? 'Unlocking workspace…' : 'Unlock workspace'}</button>
            </form>
            {message && <p className="mt-3 text-xs text-rose-200" role="status">{message}</p>}
            {!checking && !available && <p className="mt-4 rounded-lg border border-amber-200/15 bg-amber-200/[0.05] p-3 text-xs leading-relaxed text-amber-100/80">Live calling is not configured for this environment yet. Add the Twilio, OpenAI, access-code, and D1 settings to enable the workspace.</p>}
          </section>
        ) : (
          <div className="grid items-start gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
            <section aria-labelledby="setup-title" className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111018] shadow-[0_20px_70px_rgba(0,0,0,.22)]">
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.07] px-5 py-5 sm:px-7">
                <div><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-300">Step 1 · Configure</p><h2 id="setup-title" className="mt-1.5 text-lg font-semibold">Choose a call playbook</h2><p className="mt-1 text-xs text-[#9691a2]">Templates work across industries. Edit and save your reusable setup.</p></div>
                <button type="button" onClick={saveWorkspace} disabled={saving || callIsActive} className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-violet-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-violet-400 disabled:opacity-45"><Save className="h-3.5 w-3.5" />{saving ? 'Saving…' : 'Save setup'}</button>
              </div>
              <div className="space-y-7 px-5 py-6 sm:px-7">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-3"><h3 className="text-sm font-medium text-[#e8e4ef]">Conversation template</h3><span className="text-[11px] text-[#8f899d]">{templates.length} general-purpose starting points</span></div>
                  <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {templates.map((template) => {
                      const isSelected = template.id === templateId;
                      return <button key={template.id} type="button" aria-pressed={isSelected} disabled={callIsActive} onClick={() => chooseTemplate(template)} className={`group min-h-[105px] rounded-xl border p-3.5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 disabled:opacity-55 ${isSelected ? 'border-violet-400/60 bg-violet-500/[0.11]' : 'border-white/[0.08] bg-[#15141d] hover:border-white/[0.16]'}`}>
                        <span className="flex items-center justify-between"><span className={`text-base ${isSelected ? 'text-violet-200' : 'text-[#b3adbf]'}`}>{template.icon}</span>{isSelected && <Check className="h-4 w-4 text-violet-300" />}</span>
                        <span className="mt-2 block text-xs font-semibold text-[#f1edf7]">{template.name}</span><span className="mt-1 block text-[11px] leading-relaxed text-[#9d97aa]">{template.description}</span>
                      </button>;
                    })}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="voice-business-name" label="Business or team name" hint="Optional. Used naturally in the greeting.">
                    <div className="relative"><Building2 className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-[#7f798d]" /><input id="voice-business-name" value={businessName} maxLength={100} disabled={callIsActive} onChange={(event) => { setBusinessName(event.target.value); setSaveStatus(''); }} placeholder="Your business name" className="h-10 w-full rounded-lg border border-white/[0.1] bg-[#0c0b11] pl-9 pr-3 text-sm text-white outline-none transition placeholder:text-[#666174] focus:border-violet-400/70 disabled:opacity-50" /></div>
                  </Field>
                  <Field id="voice-business-context" label="Approved business context" hint="Factual details the assistant may use. Do not add confidential information.">
                    <textarea id="voice-business-context" value={businessContext} maxLength={1400} disabled={callIsActive} onChange={(event) => { setBusinessContext(event.target.value); setSaveStatus(''); }} rows={3} placeholder="What you do, key services, useful facts, and details the assistant should avoid guessing." className="min-h-[91px] w-full resize-y rounded-lg border border-white/[0.1] bg-[#0c0b11] px-3 py-2.5 text-sm leading-relaxed text-white outline-none transition placeholder:text-[#666174] focus:border-violet-400/70 disabled:opacity-50" /><span className="mt-1 block text-right text-[10px] text-[#777184]">{businessContext.length}/1,400</span>
                  </Field>
                </div>

                <div className="space-y-5 border-t border-white/[0.07] pt-6">
                  <div className="flex items-start justify-between gap-4"><div><h3 className="text-sm font-medium text-[#e8e4ef]">{selectedTemplate.name} playbook</h3><p className="mt-1 text-xs text-[#9691a2]">Edit the conversation goal and the guidance the assistant follows.</p></div><span className="rounded-md border border-white/[0.08] px-2 py-1 text-[10px] uppercase tracking-wider text-[#9b95a9]">{selectedTemplate.category}</span></div>
                  <Field id="voice-objective" label="Call objective"><textarea id="voice-objective" value={selectedPlaybook.objective} maxLength={500} disabled={callIsActive} onChange={(event) => updatePlaybook('objective', event.target.value)} rows={2} className="min-h-[68px] w-full resize-y rounded-lg border border-white/[0.1] bg-[#0c0b11] px-3 py-2.5 text-sm leading-relaxed text-white outline-none focus:border-violet-400/70 disabled:opacity-50" /></Field>
                  <Field id="voice-opening" label="Opening line" hint="Use {business} to insert the business name."><textarea id="voice-opening" value={selectedPlaybook.opening} maxLength={300} disabled={callIsActive} onChange={(event) => updatePlaybook('opening', event.target.value)} rows={2} className="min-h-[68px] w-full resize-y rounded-lg border border-white/[0.1] bg-[#0c0b11] px-3 py-2.5 text-sm leading-relaxed text-white outline-none focus:border-violet-400/70 disabled:opacity-50" /></Field>
                  <Field id="voice-guidance" label="Conversation guidance"><textarea id="voice-guidance" value={selectedPlaybook.guidance} maxLength={1200} disabled={callIsActive} onChange={(event) => updatePlaybook('guidance', event.target.value)} rows={3} className="min-h-[90px] w-full resize-y rounded-lg border border-white/[0.1] bg-[#0c0b11] px-3 py-2.5 text-sm leading-relaxed text-white outline-none focus:border-violet-400/70 disabled:opacity-50" /></Field>
                  {saveStatus && <p className="text-xs text-violet-200" role="status">{saveStatus}</p>}
                </div>
              </div>
            </section>

            <aside className="space-y-5 xl:sticky xl:top-5">
              <section aria-labelledby="call-console-title" className="overflow-hidden rounded-2xl border border-violet-300/20 bg-[linear-gradient(150deg,#191426_0%,#100f17_56%,#121018_100%)] shadow-[0_22px_80px_rgba(0,0,0,.36)]">
                <div className="border-b border-white/[0.07] px-5 py-5 sm:px-6"><p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-300">Step 2 · Live call</p><div className="mt-2 flex items-center justify-between gap-3"><h2 id="call-console-title" className="text-lg font-semibold">Call console</h2><span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium ${callIsActive ? 'border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-200' : 'border-white/[0.1] bg-white/[0.03] text-[#b7b1c3]'}`}>{callIsActive ? <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> : <Circle className="h-2.5 w-2.5" />}{callLabel}</span></div><p className="mt-1 text-xs leading-relaxed text-[#a19bad]">Calls go to one selected number after you start them. Imported contacts are never called automatically.</p></div>

                <div className="space-y-5 p-5 sm:p-6">
                  <div className="space-y-3">
                    <Field id="voice-destination" label="Phone number to call" hint="International format with country code, for example +14155550123.">
                      <input id="voice-destination" type="tel" inputMode="tel" autoComplete="off" maxLength={16} value={destination} disabled={callIsActive} onChange={(event) => setDestination(event.target.value)} placeholder="+14155550123" className="h-11 w-full rounded-lg border border-white/[0.11] bg-[#0b0a10] px-3 text-sm text-white outline-none transition placeholder:text-[#686274] focus:border-violet-400/70 disabled:opacity-50" />
                    </Field>
                    <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/[0.1] px-3 py-2.5 text-xs text-[#d6d1de] transition hover:bg-white/[0.04]"><FileUp className="h-4 w-4 text-violet-300" />Import CSV<input type="file" accept=".csv,text/csv" className="sr-only" onChange={importCsv} disabled={callIsActive} /></label>
                      <button type="button" onClick={() => { if (addDestination({ name: '', phone: destination })) setDestination(''); }} disabled={callIsActive || !destination.trim()} className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.1] px-3 py-2.5 text-xs text-[#d6d1de] transition hover:bg-white/[0.04] disabled:opacity-40"><Plus className="h-3.5 w-3.5" />Add number</button>
                    </div>
                    {queueMessage && <p className="text-[11px] leading-relaxed text-[#c8bfe0]" role="status">{queueMessage}</p>}
                    {queue.length > 0 && <div className="rounded-xl border border-white/[0.07] bg-black/20 p-3"><div className="mb-2 flex items-center justify-between text-[10px] text-[#9690a2]"><span>{queue.length}/50 contacts · stored in this tab only</span><button type="button" onClick={() => { setQueue([]); setQueueMessage('Queue cleared from this browser.'); }} disabled={callIsActive} className="text-[#aaa3b4] hover:text-white disabled:opacity-40">Clear</button></div><div className="max-h-40 space-y-1 overflow-y-auto">{queue.map((item) => <div key={item.phone} className="flex items-center gap-2 rounded-lg bg-white/[0.025] px-2.5 py-2 text-xs"><button type="button" onClick={() => setDestination(item.phone)} disabled={callIsActive} className="min-w-0 flex-1 truncate text-left text-[#e4dfeb] hover:text-violet-200">{item.name ? `${item.name} · ` : ''}{item.phone}</button><span className="shrink-0 text-[9px] text-[#9892a4]">{item.status === 'ready' ? 'Ready' : (finishMessages[item.status] || item.status)}</span><button type="button" aria-label={`Remove ${item.phone}`} onClick={() => setQueue((items) => items.filter((entry) => entry.phone !== item.phone))} disabled={callIsActive} className="text-[#777184] hover:text-white disabled:opacity-40"><X className="h-3.5 w-3.5" /></button></div>)}</div></div>}
                    <p className="text-[10px] leading-relaxed text-[#8c8699]">CSV files are read in this browser. Only the single number you call is sent to Drag AI and Twilio. Use numbers you are authorized to contact and respect opt-outs.</p>
                  </div>

                  <label className="flex items-start gap-2.5 rounded-xl border border-white/[0.08] bg-black/20 p-3 text-[11px] leading-relaxed text-[#c8c2d1]"><input type="checkbox" checked={consentConfirmed} disabled={callIsActive} onChange={(event) => setConsentConfirmed(event.target.checked)} className="mt-0.5 accent-violet-400" /><span>I am authorized to call this person, will identify the AI assistant, and will respect opt-outs and applicable calling rules.</span></label>

                  {callIsActive ? <div className="space-y-3"><div className="rounded-xl border border-white/[0.08] bg-black/20 px-4 py-3"><p className="text-xs font-medium text-white">{callStatus === 'in-progress' ? 'You are connected' : 'The phone is ringing'}</p><p className="mt-1 text-[11px] leading-relaxed text-[#9d97aa]">{activeCall.destination}. {message || 'Answer the selected phone to begin. You can end the call here.'}</p></div><button type="button" onClick={endCall} disabled={ending} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-rose-500/90 text-sm font-semibold text-white transition hover:bg-rose-500 disabled:opacity-60"><PhoneOff className="h-4 w-4" />{ending ? 'Ending call…' : 'End live call'}</button></div> : <form onSubmit={startCall} className="space-y-3"><button type="submit" disabled={!available || checking || starting || !destination.trim() || !consentConfirmed} className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-violet-500 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(139,92,246,.18)] transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-violet-900/50 disabled:text-violet-200/55"><PhoneCall className="h-4 w-4" />{checking ? 'Checking live service…' : starting ? 'Starting your call…' : 'Start call to selected number'}</button><p className="text-center text-[10px] leading-relaxed text-[#8c8699]">One call at a time · ends automatically after five minutes · {available ? 'up to five attempts per day' : 'live calling is unavailable'}</p></form>}
                  {message && <p className="text-xs leading-relaxed text-[#d1c8e4]" role="status" aria-live="polite">{message}</p>}

                  <div className="border-t border-white/[0.08] pt-4"><div className="mb-3 flex items-center justify-between"><div className="flex items-center gap-2 text-xs font-medium text-[#e6e1ec]"><MessageSquareText className="h-4 w-4 text-violet-300" />Live transcript</div><span className="text-[10px] text-[#817b8f]">{transcript.length} lines</span></div><div className="max-h-[280px] min-h-[150px] space-y-2 overflow-y-auto rounded-xl border border-white/[0.06] bg-black/20 p-3" role="log" aria-label="Live call transcript" aria-live="polite" aria-relevant="additions text">{transcript.length ? transcript.map((item, index) => <div key={`${item.id || item.event_id || index}`} className={`max-w-[94%] rounded-lg px-3 py-2.5 text-xs leading-relaxed ${item.speaker === 'assistant' ? 'bg-[#242032] text-[#e8e2f1]' : 'ml-auto bg-violet-500/15 text-violet-50'}`}><span className="mb-1 block text-[9px] font-semibold uppercase tracking-wider text-[#aaa2b9]">{item.speaker === 'assistant' ? 'Drag Voice' : 'Caller'}</span>{item.text}</div>) : <div className="flex min-h-[125px] flex-col items-center justify-center px-3 text-center"><MessageSquareText className="h-5 w-5 text-[#5f596d]" /><p className="mt-2 text-xs text-[#a19bad]">Transcript appears here during the call.</p><p className="mt-1 text-[10px] text-[#706a7d]">Call audio is not recorded.</p></div>}</div></div>
                  <div className="grid grid-cols-2 gap-2"><div className="rounded-lg border border-white/[0.07] bg-black/15 p-3"><p className="text-[9px] uppercase tracking-wider text-[#888295]">Template</p><p className="mt-1 truncate text-xs font-medium text-[#e5e0ed]">{selectedTemplate.name}</p></div><div className="rounded-lg border border-white/[0.07] bg-black/15 p-3"><p className="text-[9px] uppercase tracking-wider text-[#888295]">Call length</p><p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#e5e0ed]"><Clock3 className="h-3 w-3 text-violet-300" />5 minutes max</p></div></div>
                  <p className="text-[10px] leading-relaxed text-[#8e879b]">Interactive voice requires Twilio Media Streams. Trial accounts block the <code className="text-[#c6bdd8]">&lt;Stream&gt;</code> TwiML verb. Upgrade Twilio before placing calls. <a href="https://www.twilio.com/docs/usage/trials/try-out-voice" target="_blank" rel="noreferrer" className="text-violet-300 underline underline-offset-2 hover:text-violet-200">Twilio trial details</a>. OpenAI and Twilio usage may incur charges.</p>
                </div>
              </section>

              <section aria-labelledby="history-title" className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#111018]">
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4"><div><div className="flex items-center gap-2 text-sm font-semibold"><History className="h-4 w-4 text-violet-300" /><h2 id="history-title">Call history</h2></div><p className="mt-1 max-w-[300px] text-[10px] leading-relaxed text-[#888295]">Records and transcripts stay for 30 days. A Do not call outcome blocks another workspace call while its record remains.</p></div><button type="button" onClick={clearHistory} disabled={callIsActive || history.length === 0} aria-label="Clear call history" className="rounded-md p-2 text-[#837d8f] transition hover:bg-rose-400/10 hover:text-rose-200 disabled:opacity-30"><Trash2 className="h-4 w-4" /></button></div>
                <div className="max-h-[600px] divide-y divide-white/[0.06] overflow-y-auto">{formattedHistory.length ? formattedHistory.map((record) => {
                  const draft = notesDraft[record.session_id] || { outcome: record.outcome || '', notes: record.notes || '' };
                  const isExpanded = expandedRecord === record.session_id;
                  return <article key={record.session_id} className="px-4 py-4 sm:px-5"><div className="flex items-start justify-between gap-3"><div className="min-w-0"><p className="truncate text-xs font-medium text-[#e9e4ef]">{record.destination}</p><p className="mt-1 text-[10px] text-[#888295]">{record.localTime} · {templates.find((item) => item.id === record.template_id)?.name || 'Voice call'}</p></div><span className="shrink-0 rounded-full border border-white/[0.09] px-2 py-1 text-[9px] capitalize text-[#b5aec0]">{record.status}</span></div>
                    <div className="mt-3 flex flex-wrap items-center gap-2"><span className="text-[10px] text-[#918b9d]">Outcome: {outcomeLabels[record.outcome] || 'Not set'}</span><button type="button" onClick={() => setExpandedRecord(isExpanded ? '' : record.session_id)} className="ml-auto text-[10px] text-violet-300 hover:text-violet-200">{isExpanded ? 'Close details' : 'Transcript & notes'}</button></div>
                    {isExpanded && <div className="mt-3 space-y-3 rounded-xl border border-white/[0.07] bg-black/20 p-3"><div className="max-h-48 space-y-2 overflow-y-auto">{historyTranscript.length ? historyTranscript.map((item, index) => <p key={`${item.id || index}`} className="text-[11px] leading-relaxed text-[#c9c3d2]"><span className="font-semibold text-violet-200">{item.speaker === 'assistant' ? 'Drag Voice' : 'Caller'}: </span>{item.text}</p>) : <p className="text-[10px] text-[#858092]">No transcript is available for this call.</p>}</div><label className="block text-[10px] text-[#aaa4b4]">Outcome<select value={draft.outcome} onChange={(event) => setNotesDraft((items) => ({ ...items, [record.session_id]: { ...draft, outcome: event.target.value } }))} className="mt-1 h-9 w-full rounded-lg border border-white/[0.1] bg-[#0c0b11] px-2 text-xs text-white outline-none focus:border-violet-400/70">{Object.entries(outcomeLabels).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label><label className="block text-[10px] text-[#aaa4b4]">Notes<textarea value={draft.notes} maxLength={1000} onChange={(event) => setNotesDraft((items) => ({ ...items, [record.session_id]: { ...draft, notes: event.target.value } }))} rows={2} placeholder="Add a short note for the team" className="mt-1 w-full rounded-lg border border-white/[0.1] bg-[#0c0b11] px-2.5 py-2 text-xs text-white outline-none focus:border-violet-400/70" /></label><button type="button" onClick={() => updateRecord(record)} className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] px-3 py-2 text-[10px] text-[#ded9e8] hover:bg-white/[0.05]"><Save className="h-3.5 w-3.5" />Save record</button></div>}
                  </article>;
                }) : <div className="px-5 py-9 text-center"><History className="mx-auto h-5 w-5 text-[#5f596d]" /><p className="mt-2 text-xs text-[#a19bad]">No calls yet</p><p className="mt-1 text-[10px] text-[#706a7d]">Call records and transcripts will appear here.</p></div>}</div>
                {recordMessage && <p className="border-t border-white/[0.06] px-5 py-3 text-[10px] text-violet-200" role="status">{recordMessage}</p>}
              </section>

              <div className="rounded-xl border border-white/[0.07] bg-[#111018] p-4"><div className="flex items-start gap-2.5"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" /><p className="text-[11px] leading-relaxed text-[#9d97aa]">Saved business setup remains until overwritten. Call records and transcript text are deleted after 30 days or when you clear history. CSV contacts stay in this browser tab. Drag AI does not record call audio.</p></div></div>
            </aside>
          </div>
        )}
      </main>

      <footer className="border-t border-white/[0.07] px-4 py-5 text-center text-[10px] text-[#787285]">Drag AI · General-purpose voice workflows for teams and independent professionals</footer>
    </div>
  );
}

export default VoiceDemo;
