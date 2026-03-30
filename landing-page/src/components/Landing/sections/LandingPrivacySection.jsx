import { ArrowLeft } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function LandingPrivacySection({ onNavigate }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mt-4 rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 shadow-sm backdrop-blur-xl sm:p-10 lg:p-14">
        <button
          type="button"
          onClick={() => onNavigate("overview")}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition hover:border-[var(--color-accent)]/30"
        >
          <ArrowLeft size={14} />
          Back to Home
        </button>

        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-semibold text-[var(--color-text-primary)] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Last updated: March 30, 2026
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5">
            <p className="text-sm font-medium text-emerald-400">
              ShipIt is local-first. Your code, sessions, and project data never
              leave your machine unless you explicitly configure an external AI
              provider or integration. We do not collect, store, or sell your
              development data.
            </p>
          </div>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-[var(--color-text-secondary)]">
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                1. Introduction
              </h2>
              <p className="mt-3">
                ShipIt ("Company", "we", "us", or "our") respects your privacy
                and is committed to protecting your personal data. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our AI-powered engineering
                workspace ("Product").
              </p>
              <p className="mt-3">
                This policy applies to the ShipIt web application, CLI tools,
                APIs, landing page (shipiit.com), and any related services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                2. Information We Collect
              </h2>

              <h3 className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                2.1 Information You Provide
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Waitlist registration:</strong> Email address when you
                  sign up for our waitlist
                </li>
                <li>
                  <strong>Account information:</strong> Name, email, and
                  password if you create an account
                </li>
                <li>
                  <strong>Payment information:</strong> Billing details processed
                  through our payment provider (we do not store card numbers)
                </li>
                <li>
                  <strong>Support communications:</strong> Information you
                  provide when contacting us
                </li>
              </ul>

              <h3 className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                2.2 Information We Do NOT Collect
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  Your source code, project files, or repository contents
                </li>
                <li>
                  Your AI conversation history, prompts, or responses
                </li>
                <li>
                  Security scan results or vulnerability findings
                </li>
                <li>
                  API keys or credentials for third-party services
                </li>
                <li>
                  Session data, workflow configurations, or notebook contents
                </li>
              </ul>
              <p className="mt-3">
                All of the above data is stored locally on your machine in the{" "}
                <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-sm">
                  config/
                </code>{" "}
                directory and is never transmitted to our servers.
              </p>

              <h3 className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                2.3 Automatically Collected Information
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Usage analytics:</strong> Anonymous product usage
                  metrics (features used, session duration) — only if you opt in
                </li>
                <li>
                  <strong>Device information:</strong> Browser type, operating
                  system, and device type for the landing page
                </li>
                <li>
                  <strong>Log data:</strong> IP address, access times, and pages
                  viewed on shipiit.com
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">We use the information we collect to:</p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>Provide, maintain, and improve the Product</li>
                <li>
                  Send you updates about the Product, including waitlist
                  notifications and product launches
                </li>
                <li>Process payments and manage subscriptions</li>
                <li>Respond to your support requests and communications</li>
                <li>
                  Analyze anonymous usage patterns to improve the Product
                  (opt-in only)
                </li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                4. AI Provider Data Flow
              </h2>
              <p className="mt-3">
                When you use ShipIt's AI features, your prompts and code
                context are sent directly to your configured AI provider (e.g.,
                Anthropic, OpenAI, Google, AWS Bedrock, Groq, Together AI,
                OpenRouter, or your local Ollama instance). This data flow is:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Direct:</strong> From your machine to the AI provider —
                  it does not pass through ShipIt's servers
                </li>
                <li>
                  <strong>Configurable:</strong> You choose which provider to
                  use and provide your own API keys
                </li>
                <li>
                  <strong>Optional:</strong> With Ollama, you can run 100%
                  locally with zero external data transmission
                </li>
              </ul>
              <p className="mt-3">
                Each AI provider has its own privacy policy governing how they
                handle your data. We encourage you to review the privacy policies
                of your chosen providers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                5. Data Sharing & Disclosure
              </h2>
              <p className="mt-3">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information only in the following
                limited circumstances:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Service providers:</strong> With trusted third parties
                  who assist us in operating the Product (e.g., payment
                  processors, email services), subject to confidentiality
                  obligations
                </li>
                <li>
                  <strong>Legal requirements:</strong> When required by law,
                  legal process, or government request
                </li>
                <li>
                  <strong>Business transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets, with notice to you
                </li>
                <li>
                  <strong>With your consent:</strong> When you explicitly opt in
                  to sharing (e.g., enabling Langfuse observability)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                6. Data Security
              </h2>
              <p className="mt-3">
                We implement appropriate technical and organizational measures to
                protect your personal information:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  All API keys and credentials are stored locally on your
                  machine, never on our servers
                </li>
                <li>
                  The landing page and web services use HTTPS encryption for all
                  data in transit
                </li>
                <li>
                  Local data in the{" "}
                  <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-sm">
                    config/
                  </code>{" "}
                  directory is gitignored by default to prevent accidental
                  exposure
                </li>
                <li>
                  Webhook endpoints support HMAC signature verification for
                  authentication
                </li>
              </ul>
              <p className="mt-3">
                While we strive to protect your information, no method of
                transmission or storage is 100% secure. We cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                7. Cookies & Tracking
              </h2>
              <p className="mt-3">
                Our landing page (shipiit.com) uses minimal cookies:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Essential cookies:</strong> Theme preference
                  (light/dark mode) stored in localStorage
                </li>
                <li>
                  <strong>Analytics cookies:</strong> Anonymous usage analytics
                  (only if you consent)
                </li>
              </ul>
              <p className="mt-3">
                We do not use advertising cookies, tracking pixels, or
                third-party behavioral tracking.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                8. Your Rights (GDPR & CCPA)
              </h2>
              <p className="mt-3">
                Depending on your location, you may have the following rights
                regarding your personal data:
              </p>

              <h3 className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                For EU/EEA Residents (GDPR)
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Right of access:</strong> Request a copy of the
                  personal data we hold about you
                </li>
                <li>
                  <strong>Right to rectification:</strong> Request correction of
                  inaccurate personal data
                </li>
                <li>
                  <strong>Right to erasure:</strong> Request deletion of your
                  personal data
                </li>
                <li>
                  <strong>Right to restrict processing:</strong> Request
                  limitation of how we process your data
                </li>
                <li>
                  <strong>Right to data portability:</strong> Request your data
                  in a structured, machine-readable format
                </li>
                <li>
                  <strong>Right to object:</strong> Object to processing of your
                  personal data
                </li>
              </ul>

              <h3 className="mt-4 text-base font-semibold text-[var(--color-text-primary)]">
                For California Residents (CCPA)
              </h3>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Right to know:</strong> What personal information is
                  collected and how it is used
                </li>
                <li>
                  <strong>Right to delete:</strong> Request deletion of your
                  personal information
                </li>
                <li>
                  <strong>Right to opt-out:</strong> Opt out of the sale of
                  personal information (we do not sell your data)
                </li>
                <li>
                  <strong>Right to non-discrimination:</strong> Equal service
                  regardless of exercising your rights
                </li>
              </ul>

              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:rahul@iamrraj.com"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  rahul@iamrraj.com
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                9. Data Retention
              </h2>
              <p className="mt-3">
                We retain your personal information only for as long as necessary
                to fulfill the purposes described in this policy:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  <strong>Waitlist emails:</strong> Until you unsubscribe or the
                  Product launches publicly
                </li>
                <li>
                  <strong>Account data:</strong> For the duration of your account
                  plus 30 days after deletion
                </li>
                <li>
                  <strong>Payment records:</strong> As required by tax and
                  accounting laws (typically 7 years)
                </li>
                <li>
                  <strong>Support communications:</strong> For 2 years after
                  resolution
                </li>
              </ul>
              <p className="mt-3">
                Local data stored on your machine (sessions, settings, scan
                results) is under your control and can be deleted at any time by
                removing the{" "}
                <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-sm">
                  config/
                </code>{" "}
                directory.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                10. Children's Privacy
              </h2>
              <p className="mt-3">
                The Product is not intended for use by children under the age of
                16. We do not knowingly collect personal information from
                children under 16. If we discover that we have inadvertently
                collected such information, we will delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                11. International Data Transfers
              </h2>
              <p className="mt-3">
                If you access the Product from outside the country where our
                servers are located, your information may be transferred across
                international borders. We ensure appropriate safeguards are in
                place for such transfers in compliance with applicable data
                protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                12. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                this page and updating the "Last updated" date. We encourage you
                to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                13. Contact Us
              </h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy or wish to
                exercise your data rights, contact us at:
              </p>
              <ul className="mt-2 space-y-1 pl-4">
                <li>
                  Privacy inquiries:{" "}
                  <a
                    href="mailto:rahul@iamrraj.com"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    rahul@iamrraj.com
                  </a>
                </li>
                <li>
                  General inquiries:{" "}
                  <a
                    href="mailto:rahul@iamrraj.com"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    rahul@iamrraj.com
                  </a>
                </li>
                <li>
                  GitHub:{" "}
                  <a
                    href="https://github.com/iamrraj/ai_developer"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    github.com/iamrraj/ai_developer
                  </a>
                </li>
                <li>
                  Website:{" "}
                  <a
                    href="https://shipiit.com"
                    className="text-[var(--color-accent)] hover:underline"
                  >
                    shipiit.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
