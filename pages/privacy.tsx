import React from 'react';
import LegalLayout from '../components/LegalLayout';

const PrivacyPage: React.FC = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      description="How Boma collects, uses, and protects personal information."
    >
      <p className="callout">
        This Privacy Policy is a template. Replace placeholder text with actual data handling practices and ensure
        compliance (e.g., GDPR, CCPA).
      </p>

      <h2>1. Information We Collect</h2>
      <h3>1.1 Provided by You</h3>
      <p>
        Examples: account details, profile data, support inquiries, payment information (processed via third-party
        providers; not stored on our servers except minimal tokens).
      </p>
      <h3>1.2 Automatically Collected</h3>
      <p>
        Usage metrics, device/browser metadata, IP address (for security & fraud prevention), cookies, and analytics
        events.
      </p>

      <h2>2. Legal Bases (GDPR)</h2>
      <ul>
        <li>Contract performance</li>
        <li>Legitimate interests (service improvement, security)</li>
        <li>Consent (marketing communications, non-essential cookies)</li>
        <li>Legal obligations (tax, compliance)</li>
      </ul>

      <h2>3. Use of Information</h2>
      <p>
        To provide and improve services, personalize experience, secure accounts, process transactions, communicate
        updates, and comply with law.
      </p>

      <h2>4. Sharing & Disclosure</h2>
      <p>
        We may share with vetted processors (hosting, analytics, payment), in corporate transactions, or when required
        by law. No sale of personal data without explicit notice/opt-out.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        Retained only as long as needed for the purposes collected or to meet legal obligations, then securely deleted
        or anonymized.
      </p>

      <h2>6. Security</h2>
      <p>
        Administrative, technical, and physical safeguards (encryption in transit, least privilege access controls,
        monitoring). No method is 100% secure.
      </p>

      <h2>7. Your Rights</h2>
      <ul>
        <li>Access, rectify, or delete personal data</li>
        <li>Portability (structured, commonly used format)</li>
        <li>Restrict or object to certain processing</li>
        <li>Withdraw consent where relied upon</li>
        <li>File a complaint with a supervisory authority</li>
      </ul>

      <h2>8. International Transfers</h2>
      <p>
        Safeguards such as Standard Contractual Clauses or equivalent mechanisms are used for cross-border transfers.
      </p>

      <h2>9. Children</h2>
      <p>
        Services not directed to children under the applicable digital consent age. Remove unauthorized child data on
        notice.
      </p>

      <h2>10. Cookies & Tracking</h2>
      <p>
        Essential cookies for core functionality; analytics cookies for usage insights; marketing cookies only with
        consent. Set or revoke preferences via in-app cookie banner (implement separately).
      </p>

      <h2>11. Changes</h2>
      <p>
        Material changes will be announced (banner, email). Continued use after effective date indicates acceptance.
      </p>

      <h2>12. Contact</h2>
      <p>
        Privacy inquiries: <a href="mailto:privacy@example.com">privacy@example.com</a>.
      </p>

      <p style={{ fontSize: '.8rem', marginTop: '3rem', opacity: 0.7 }}>
        Last updated: {new Date().toISOString().split('T')[0]}
      </p>
    </LegalLayout>
  );
};

export default PrivacyPage;
