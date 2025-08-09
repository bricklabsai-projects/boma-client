import React from 'react';
import LegalLayout from '../components/LegalLayout';

const TermsPage: React.FC = () => {
  return (
    <LegalLayout
      title="Terms & Conditions"
      description="Terms and Conditions governing the use of Boma products and services."
    >
      <p className="callout">
        These Terms are a template. Replace placeholders with your actual, jurisdiction-specific legal language.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our services you agree to be bound by these Terms and our Privacy Policy. If you do not
        agree, you must discontinue use.
      </p>

      <h2>2. Changes to Terms</h2>
      <p>
        We may update these Terms periodically. Material changes will be communicated by notice within the application
        or via email. Continued use constitutes acceptance.
      </p>

      <h2>3. Accounts & Security</h2>
      <p>
        You are responsible for maintaining the confidentiality of login credentials and all activities under your
        account. Notify us promptly of unauthorized use.
      </p>

      <h2>4. Acceptable Use</h2>
      <ul>
        <li>No unlawful, infringing, or abusive conduct.</li>
        <li>No reverse engineering, scraping, or automated high-volume requests.</li>
        <li>No introduction of malware or harmful code.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>
        All trademarks, service marks, and content remain the property of their respective owners. Limited, revocable,
        non-transferable license granted for normal use.
      </p>

      <h2>6. Service Availability</h2>
      <p>
        We strive for high uptime but provide no absolute guarantee. Planned maintenance or force majeure may impact
        availability.
      </p>

      <h2>7. Disclaimers</h2>
      <p>
        Services provided &quot;AS IS&quot; without warranties of any kind, express or implied, to the fullest extent
        permitted by law.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted, aggregate liability shall not exceed the fees paid by you in the preceding
        twelve (12) months.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        Insert governing law and jurisdiction here. International users consent to the chosen venue.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these Terms: <a href="mailto:legal@example.com">legal@example.com</a>.
      </p>

      <p style={{ fontSize: '.8rem', marginTop: '3rem', opacity: 0.7 }}>
        Last updated: {new Date().toISOString().split('T')[0]}
      </p>
    </LegalLayout>
  );
};

export default TermsPage;
