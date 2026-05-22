import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Reveal } from '../Reveal';
import { Send } from 'lucide-react';

const PUBLIC_EMAIL = 'info@drag-ai.com';

const FormField = ({ id, label, required, children }) => (
  <div>
    <Label htmlFor={id}>
      {label}
      {required ? ' *' : ''}
    </Label>
    <div className="mt-1.5">{children}</div>
  </div>
);

const SuccessState = ({ onReset }) => (
  <div className="text-center py-12" data-testid="contact-form-success-message">
    <div className="w-16 h-16 bg-[hsl(var(--accent-purple))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
      <Send className="h-8 w-8 text-[hsl(var(--accent-purple))]" />
    </div>
    <h3 className="text-xl font-semibold mb-2">Request received</h3>
    <p className="text-sm text-muted-foreground mb-6">
      Thank you for reaching out. We will reply within one business day to schedule your 30-minute AI discovery call.
    </p>
    <Button
      variant="outline"
      onClick={onReset}
      data-testid="contact-form-send-another"
    >
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
        Request AI Discovery Call
        <Send className="ml-2 h-4 w-4" />
      </>
    )}
  </Button>
);

const INDUSTRY_OPTIONS = [
  'Construction & EPC',
  'Hospitality & Restaurants',
  'Logistics & Warehousing',
  'Real Estate & Property Management',
  'Insurance & Claims',
  'HR & Recruitment',
  'Retail & E-commerce',
  'Manufacturing & Operations',
  'Professional Services',
  'Financial Services',
  'Healthcare',
  'Other',
];

const PREFERRED_CONTACT_OPTIONS = ['Email', 'Phone', 'Video call', 'No preference'];

const HAS_DATA_OPTIONS = [
  { value: '', label: 'Select an option' },
  { value: 'yes', label: 'Yes \u2014 we already have data, documents, and systems' },
  { value: 'partial', label: 'Partially \u2014 some data or systems are available' },
  { value: 'no', label: 'No \u2014 we are starting from scratch' },
  { value: 'not-sure', label: 'Not sure yet' },
];

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

export const ContactForm = ({
  formRef,
  formData,
  isSubmitting,
  isSuccess,
  handleChange,
  handleSubmit,
  onReset,
}) => (
  <div className="lg:col-span-3" ref={formRef} id="form">
    <Reveal delay={0.2}>
      <Card className="p-8 border-2 card-hover">
        {isSuccess ? (
          <SuccessState onReset={onReset} />
        ) : (
          <form onSubmit={handleSubmit} data-testid="contact-form" noValidate>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Request Your Discovery Call</h2>
              <p className="text-sm text-muted-foreground">
                Share a few details so we come prepared with the right questions.
              </p>
            </div>

            <HoneypotField />

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="name" label="Full Name" required>
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

                <FormField id="email" label="Work Email" required>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

                <FormField id="role" label="Role / Title">
                  <Input
                    id="role"
                    name="role"
                    type="text"
                    placeholder="CTO, Head of Operations, etc."
                    value={formData.role}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    data-testid="contact-form-role-input"
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField id="industry" label="Industry">
                  <SelectField
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    options={INDUSTRY_OPTIONS}
                    placeholder="Select your industry"
                    testId="contact-form-industry-select"
                  />
                </FormField>

                <FormField id="country" label="Country">
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="United Kingdom"
                    value={formData.country}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    data-testid="contact-form-country-input"
                  />
                </FormField>
              </div>

              <FormField id="hasData" label="Do you already have data, documents, or systems for this workflow?">
                <SelectField
                  id="hasData"
                  name="hasData"
                  value={formData.hasData}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  options={HAS_DATA_OPTIONS}
                  testId="contact-form-has-data-select"
                />
              </FormField>

              <FormField id="message" label="What problem are you trying to solve?" required>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the business problem, the current workflow, and the outcome you would like to achieve."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  data-testid="contact-form-message-textarea"
                />
              </FormField>

              <FormField id="preferredContact" label="Preferred contact method">
                <SelectField
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  options={PREFERRED_CONTACT_OPTIONS}
                  placeholder="No preference"
                  testId="contact-form-preferred-contact-select"
                />
              </FormField>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 rounded border-input text-[hsl(var(--accent-purple))] focus:ring-[hsl(var(--accent-purple))]"
                  data-testid="contact-form-consent-checkbox"
                  required
                />
                <Label
                  htmlFor="consent"
                  className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I agree to Drag AI processing the information above to respond to my enquiry, as described in the{' '}
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
