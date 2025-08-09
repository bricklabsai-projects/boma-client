import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import '../styles/legal.css';

interface LegalLayoutProps {
  title: string;
  description?: string;
}

const LegalLayout: React.FC<PropsWithChildren<LegalLayoutProps>> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title} | Boma</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <header className="legal-header">
        <div className="legal-header__inner">
          <Link href="/" className="brand">
            <img src="/assets/logo-boma.svg" alt="Boma logo" className="brand__logo" />
            <span className="brand__text">Boma</span>
          </Link>
          <nav className="legal-nav">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </nav>
        </div>
      </header>
      <main className="legal-main">
        <article className="legal-article">
          <h1>{title}</h1>
          {children}
        </article>
      </main>
      <footer className="legal-footer">
        <p>© {new Date().getFullYear()} Boma. All rights reserved.</p>
      </footer>
    </>
  );
};

export default LegalLayout;
