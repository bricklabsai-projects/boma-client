import { useState } from 'react';

interface QA {
  q: string;
  a: string;
}

const faqs: QA[] = [
  {
    q: 'What is Boma in one sentence?',
    a: 'A focused platform that helps you orchestrate and monitor your core operational workflows without the usual integration drag.'
  },
  {
    q: 'How fast can we onboard?',
    a: 'Most teams complete initial setup in under a day—core data connections, roles, and first workflow go live inside the first week.'
  },
  {
    q: 'Do you store sensitive credentials?',
    a: 'Credentials are tokenized; the raw secrets stay with your vault/provider. We store only scoped, revocable tokens.'
  },
  {
    q: 'Is there an on‑prem option?',
    a: 'Yes—hybrid deployment available for regulated environments. Contact us for architecture details.'
  },
  {
    q: 'How is pricing structured?',
    a: 'Simple: base platform + usage tiers tied to executed workflow runs. No per-seat surprise line items.'
  },
  {
    q: 'Can I export my data?',
    a: 'Any time. Export tooling (CLI + UI) delivers schemas and history in open formats.'
  }
];

const Item = ({ qa, i }: { qa: QA; i: number }) => {
  const [open, setOpen] = useState<boolean>(i < 2);
  return (
    <div className="rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:shadow-md">
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="font-medium text-slate-800">{qa.q}</span>
        <span
          className={`mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border text-xs transition ${
            open
              ? 'rotate-45 border-[#244C93] text-[#244C93]'
              : 'border-slate-300 text-slate-500'
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="pt-3 text-sm leading-relaxed text-slate-600">
          {qa.a}
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="relative mx-auto mt-28 max-w-6xl scroll-mt-24 px-5 pb-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-[#244C93]">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Straight answers—reach out if you need more depth.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {faqs.map((qa, i) => (
          <Item key={qa.q} qa={qa} i={i} />
        ))}
      </div>
      <div className="mt-10 rounded-md bg-gradient-to-r from-[#244C93] to-[#1e3f7a] px-6 py-8 text-center text-white">
        <p className="text-lg font-medium">
          Still have a question? We reply quickly.
        </p>
        <a
          href="mailto:hello@example.com"
          className="mt-4 inline-block rounded-md bg-white px-5 py-2 text-sm font-semibold text-[#244C93] shadow hover:shadow-md active:shadow-none transition"
        >
          Contact support
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
