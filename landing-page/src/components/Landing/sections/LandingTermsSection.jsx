import { ArrowLeft } from "lucide-react";
import useScrollReveal from "../useScrollReveal";

export default function LandingTermsSection({ onNavigate }) {
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
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm text-[var(--color-text-muted)]">
            Last updated: March 30, 2026
          </p>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-[var(--color-text-secondary)]">
            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                1. Agreement to Terms
              </h2>
              <p className="mt-3">
                By accessing or using ShipIt ("the Product"), the AI-powered
                engineering workspace operated by ShipIt ("Company", "we", "us",
                or "our"), you agree to be bound by these Terms & Conditions
                ("Terms"). If you do not agree to these Terms, you must not use
                the Product.
              </p>
              <p className="mt-3">
                These Terms apply to all visitors, users, and others who access
                or use the Product, including the web application, CLI tools,
                APIs, and any related services.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                2. Description of Service
              </h2>
              <p className="mt-3">
                ShipIt is an AI-powered engineering operating system that
                provides software development tools including but not limited to:
                AI-assisted code implementation, code review, security scanning,
                penetration testing, automated testing, deployment automation,
                workflow management, and integration with third-party services.
              </p>
              <p className="mt-3">
                The Product supports multiple AI engines (Claude, Codex, Gemini,
                ShipIt CLI) and connects to third-party AI model providers. Your
                use of those providers is subject to their respective terms of
                service.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                3. Accounts & Registration
              </h2>
              <p className="mt-3">
                To access certain features, you may need to register for an
                account. You agree to provide accurate, current, and complete
                information during registration and to update such information to
                keep it accurate, current, and complete.
              </p>
              <p className="mt-3">
                You are responsible for safeguarding the password and API keys
                associated with your account and for any activities or actions
                under your account. You must notify us immediately of any
                unauthorized use of your account.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                4. License & Usage Rights
              </h2>
              <p className="mt-3">
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable, revocable license to
                use the Product for your internal business or personal
                development purposes.
              </p>
              <p className="mt-3">You may not:</p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  Copy, modify, distribute, sell, or lease any part of the
                  Product
                </li>
                <li>
                  Reverse engineer or attempt to extract the source code of the
                  Product, except where permitted by law
                </li>
                <li>
                  Use the Product to develop a competing product or service
                </li>
                <li>
                  Remove, alter, or obscure any proprietary notices in the
                  Product
                </li>
                <li>
                  Use the Product for any unlawful purpose or in violation of any
                  applicable laws
                </li>
                <li>
                  Use the security scanning or penetration testing features
                  against systems you do not own or have explicit written
                  authorization to test
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                5. Acceptable Use
              </h2>
              <p className="mt-3">
                You agree to use the Product only for lawful purposes and in
                accordance with these Terms. You agree not to use the Product:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  To generate, store, or transmit malicious code, viruses, or
                  harmful software
                </li>
                <li>
                  To perform unauthorized security testing against third-party
                  systems
                </li>
                <li>
                  To violate the intellectual property rights of any third party
                </li>
                <li>
                  To generate content that is illegal, harmful, threatening,
                  abusive, or discriminatory
                </li>
                <li>
                  To circumvent any access controls or usage limits imposed by
                  the Product
                </li>
                <li>
                  To interfere with or disrupt the Product or servers or networks
                  connected to the Product
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                6. AI-Generated Content
              </h2>
              <p className="mt-3">
                The Product uses artificial intelligence to generate code,
                security reports, reviews, and other content. You acknowledge
                that:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-1.5 pl-4">
                <li>
                  AI-generated content may contain errors, inaccuracies, or
                  vulnerabilities
                </li>
                <li>
                  You are solely responsible for reviewing, testing, and
                  validating all AI-generated code before deploying it to
                  production
                </li>
                <li>
                  Security scan results and penetration test findings are
                  indicative and may not identify all vulnerabilities
                </li>
                <li>
                  We do not guarantee the accuracy, completeness, or fitness for
                  purpose of any AI-generated output
                </li>
                <li>
                  You retain ownership of your code and inputs; AI-generated
                  outputs are provided under the same license as the Product
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                7. Third-Party Services & AI Providers
              </h2>
              <p className="mt-3">
                The Product integrates with third-party AI model providers (such
                as Anthropic, OpenAI, Google, AWS, Groq, Together AI, and
                others) and services (GitHub, Slack, Discord, Jira, etc.). Your
                use of these services through ShipIt is subject to their
                respective terms of service and privacy policies.
              </p>
              <p className="mt-3">
                We are not responsible for the availability, accuracy, or
                conduct of any third-party services. API keys and credentials you
                provide for third-party services are stored locally on your
                machine and are not transmitted to our servers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                8. Payment & Subscriptions
              </h2>
              <p className="mt-3">
                Certain features of the Product may require a paid subscription.
                If you purchase a subscription, you agree to pay the applicable
                fees and authorize us to charge your payment method on a
                recurring basis.
              </p>
              <p className="mt-3">
                You may cancel your subscription at any time. Cancellation takes
                effect at the end of your current billing period. We do not
                provide refunds for partial billing periods unless required by
                applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                9. Intellectual Property
              </h2>
              <p className="mt-3">
                The Product, including its original content, features,
                functionality, and design, is owned by ShipIt and is protected
                by international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
              <p className="mt-3">
                Your code, data, and inputs remain your property. We do not
                claim any ownership rights over your content processed through
                the Product.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                10. Data & Local Storage
              </h2>
              <p className="mt-3">
                ShipIt is designed as a local-first application. Your sessions,
                settings, project data, security scan results, and workflow
                history are stored locally on your machine in the{" "}
                <code className="rounded bg-[var(--color-bg-secondary)] px-1.5 py-0.5 text-sm">
                  config/
                </code>{" "}
                directory.
              </p>
              <p className="mt-3">
                AI requests are sent to your configured AI provider (not to
                ShipIt servers). We do not collect, store, or process your code
                or development data on our infrastructure unless explicitly opted
                in (e.g., Langfuse observability).
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                11. Disclaimers
              </h2>
              <p className="mt-3">
                THE PRODUCT IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT
                NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
                A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p className="mt-3">
                We do not warrant that the Product will be uninterrupted, secure,
                or error-free, that the results obtained from the Product will be
                accurate or reliable, or that the quality of the Product will
                meet your expectations.
              </p>
              <p className="mt-3">
                The security scanning and penetration testing features are
                provided as aids to your security processes and are not a
                substitute for professional security audits or compliance
                assessments.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                12. Limitation of Liability
              </h2>
              <p className="mt-3">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SHIPIT,
                ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
                DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA,
                USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR
                ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE PRODUCT.
              </p>
              <p className="mt-3">
                Our total aggregate liability for all claims relating to the
                Product shall not exceed the amount you paid us in the twelve
                (12) months preceding the claim, or one hundred dollars ($100),
                whichever is greater.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                13. Indemnification
              </h2>
              <p className="mt-3">
                You agree to defend, indemnify, and hold harmless ShipIt and its
                officers, directors, employees, and agents from and against any
                claims, damages, obligations, losses, liabilities, costs, and
                expenses arising from your use of the Product, your violation of
                these Terms, or your violation of any rights of a third party.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                14. Termination
              </h2>
              <p className="mt-3">
                We may terminate or suspend your access to the Product
                immediately, without prior notice or liability, for any reason,
                including without limitation if you breach these Terms.
              </p>
              <p className="mt-3">
                Upon termination, your right to use the Product will immediately
                cease. All provisions of these Terms which by their nature should
                survive termination shall survive, including ownership
                provisions, warranty disclaimers, indemnity, and limitations of
                liability.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                15. Changes to Terms
              </h2>
              <p className="mt-3">
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will provide at least 30
                days' notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole
                discretion.
              </p>
              <p className="mt-3">
                Your continued use of the Product after any changes to the Terms
                constitutes acceptance of those changes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                16. Governing Law
              </h2>
              <p className="mt-3">
                These Terms shall be governed by and construed in accordance with
                the laws of the jurisdiction in which the Company is
                incorporated, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
                17. Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <ul className="mt-2 space-y-1 pl-4">
                <li>
                  Email:{" "}
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
