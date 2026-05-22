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
        Book My 30-Minute AI Discovery Call
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

                <FormField id="interest" label="Area of Interest">
                  <Input
                    id="interest"
                    name="interest"
                    type="text"
                    placeholder="Agentic AI, RAG, Doc AI, Voice AI..."
                    value={formData.interest}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    data-testid="contact-form-interest-input"
                  />
                </FormField>
              </div>

              <FormField id="message" label="Tell us about your problem" required>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="What is the business problem, the current workflow, and the outcome you would like to achieve?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={6}
                  data-testid="contact-form-message-textarea"
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
