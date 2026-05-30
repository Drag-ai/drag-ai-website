import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Reveal } from '../Reveal';
import { Send } from 'lucide-react';

const PUBLIC_EMAIL = 'info@drag-ai.com';

const FormField = ({ id, label, required, children, helper }) => (
  <div>
    <Label htmlFor={id}>
      {label}
      {required ? ' *' : ''}
    </Label>
    <div className="mt-1.5">{children}</div>
    {helper && <p className="mt-1 text-xs text-muted-foreground">{helper}</p>}
  </div>
);

const SelectField = ({ id, name, value, onChange, disabled, options, placeholder, testId }) => (
  <select
    id={id}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}
    data-testid={testId}
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {placeholder !== undefined && <option value="">{placeholder}</option>}
    {options.map((opt) =>
      typeof opt === 'string' ? (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ) : (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ),
    )}
  </select>
);

const SuccessState = ({ onReset }) => (
  <div className="text-center py-12" data-testid="contact-form-success-message">
    <div className="w-16 h-16 bg-[hsl(var(--accent-purple))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Send className="h-8 w-8 text-[hsl(var(--accent-purple))]" />
    </div>
    <h3 className="text-xl font-semibold mb-2">Thank you</h3>
    <p className="text-sm text-muted-foreground mb-6">
      Drag AI will review your workflow and contact you soon.
    </p>
    <Button variant="outline" onClick={onReset} data-testid="contact-form-send-another">
      Send another message
    </Button>
  </div>
);

const SubmitButton = ({ isSubmitting }) => (
  <Button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
    data-testid="contact-form-submit-button"
  >
    {isSubmitting ? (
      'Sending...'
    ) : (
      <>
        Request AI Strategy Call
        <Send className="ml-2 h-4 w-4" />
      </>
    )}
  </Button>
);

const HoneypotField = () => (
  <input
    type="checkbox"
    name="botcheck"
    className="hidden"
    style={{ display: 'none' }}
    tabIndex={-1}
    autoComplete="off"
  />
);

const BUDGET_OPTIONS = [
  '< £5k',
  '£5k – £15k',
  '£15k – £50k',
  '£50k – £150k',
  '£150k+',
  'Not sure yet',
];

const TIMELINE_OPTIONS = [
  'ASAP (this month)',
  '1\u20133 months',
  '3\u20136 months',
  '6+ months',
  'Just exploring',
];

export const ContactForm = ({
  formRef,
  formData,
  isSubmitting,
  isSuccess,
  handleChange,
  handleSubmit,
  onReset,
  compact = false,
}) => (
  <div className={compact ? '' : 'lg:col-span-3'} ref={formRef} id="form">
    <Reveal delay={0.2}>
      <Card className="p-8 border-2 card-hover">
        {isSuccess ? (
          <SuccessState onReset={onReset} />
        ) : (
          <form onSubmit={handleSubmit} data-testid="contact-form" noValidate>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Request Your AI Strategy Call</h2>
              <p className="text-sm text-muted-foreground">
                Share a few details and we&apos;ll come prepared with the right questions.
              </p>
            </div>

            <HoneypotField />

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="name" label="Name" required>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    data-testid="contact-form-name-input"
                  />
                </FormField>

                <FormField id="company" label="Company" required>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Ltd."
                    value={formData.company}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    data-testid="contact-form-company-input"
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="email" label="Work email" required>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    data-testid="contact-form-email-input"
                  />
                </FormField>

                <FormField
                  id="phone"
                  label="Phone or WhatsApp"
                  helper="Optional, useful for faster scheduling."
                >
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+44 ..."
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    data-testid="contact-form-phone-input"
                  />
                </FormField>
              </div>

              <FormField id="automation" label="What do you want to automate?" required>
                <Textarea
                  id="automation"
                  name="automation"
                  placeholder="Describe the workflow, decision, or process you want AI to support."
                  value={formData.automation}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={5}
                  data-testid="contact-form-automation-textarea"
                />
              </FormField>

              <FormField
                id="currentTools"
                label="Current tools used"
                helper="CRM, helpdesk, spreadsheets, internal systems, etc."
              >
                <Input
                  id="currentTools"
                  name="currentTools"
                  type="text"
                  placeholder="HubSpot, Notion, Zendesk, Excel, ..."
                  value={formData.currentTools}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  data-testid="contact-form-tools-input"
                />
              </FormField>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="budget" label="Budget range">
                  <SelectField
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    options={BUDGET_OPTIONS}
                    placeholder="Select a range"
                    testId="contact-form-budget-select"
                  />
                </FormField>

                <FormField id="timeline" label="Timeline">
                  <SelectField
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    options={TIMELINE_OPTIONS}
                    placeholder="When do you want to start?"
                    testId="contact-form-timeline-select"
                  />
                </FormField>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                  className="mt-1 h-4 w-4 rounded border-input text-[hsl(var(--accent-purple))] focus:ring-[hsl(var(--accent-purple))]"
                  data-testid="contact-form-consent-checkbox"
                />
                <Label
                  htmlFor="consent"
                  className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I agree to Drag AI processing the information above to respond to my enquiry, as
                  described in the{' '}
                  <a href="/privacy" className="text-[hsl(var(--accent-purple))] hover:brightness-110">
                    Privacy Policy
                  </a>
                  .
                </Label>
              </div>

              <SubmitButton isSubmitting={isSubmitting} />

              <p className="text-xs text-muted-foreground text-center">
                Prefer email? Write to{' '}
                <a href={`mailto:${PUBLIC_EMAIL}`} className="text-[hsl(var(--accent-purple))] hover:brightness-110">
                  {PUBLIC_EMAIL}
                </a>
                .
              </p>
            </div>
          </form>
        )}
      </Card>
    </Reveal>
  </div>
);
