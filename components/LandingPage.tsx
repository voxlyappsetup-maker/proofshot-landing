import WaitlistForm from "./WaitlistForm";

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 13a5 5 0 0 0 7.54.54l1.92-1.92a5 5 0 0 0-7.07-7.07L10.9 6"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 11a5 5 0 0 0-7.54-.54L4.54 12.38a5 5 0 0 0 7.07 7.07L13.1 18"
      />
    </svg>
  );
}

function CaptureIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8.5A2.5 2.5 0 0 1 6.5 6H8l1-1.5h6L16 6h1.5A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Z"
      />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ExportIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      className="h-8 w-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h7A1.5 1.5 0 0 1 18 5.5v13A1.5 1.5 0 0 1 16.5 20H9.5A1.5 1.5 0 0 1 8 18.5V17"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 16V8m0 0-2.5 2.5M12 8l2.5 2.5M4 12h8"
      />
    </svg>
  );
}

const problems = [
  {
    title: "You buy tools just to review them",
    body: "Subscriptions pile up so you can write one honest article — then sit unused after publish day.",
  },
  {
    title: "Stock product shots fail Google’s E-E-A-T test",
    body: "Images lifted from a vendor site look recycled. Search treats that as thin, second-hand experience.",
  },
  {
    title: "Manual logins waste the writing day",
    body: "Signing into every dashboard to grab one screenshot is slow, messy, and easy to skip under deadline.",
  },
];

const steps = [
  {
    icon: <LinkIcon />,
    title: "Connect accounts securely",
    body: "Link the SaaS tools you already use. ProofShot works from inside logged-in accounts — not public marketing pages.",
  },
  {
    icon: <CaptureIcon />,
    title: "Batch-capture with watermark + timestamp",
    body: "Fire a documented capture pass. Every frame is watermarked and time-stamped so the proof is yours.",
  },
  {
    icon: <ExportIcon />,
    title: "Export ready for articles or comparison tables",
    body: "Download clean, article-ready shots for reviews, roundups, and affiliate comparison grids.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-ink">
      <header
        className="bg-[linear-gradient(135deg,#0d2338_0%,#1f6f8a_100%)] text-white"
      >
        <div className="mx-auto flex max-w-2xl flex-col px-5 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10">
          <p className="text-sm font-semibold tracking-[0.18em] text-white/70">
            PROOFSHOT
          </p>
          <h1 className="mt-8 text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            Stop stealing screenshots for your reviews — capture real usage proof automatically
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            ProofShot documents logged-in SaaS accounts with authentic, first-hand
            screenshots. Built for reviewers and affiliates who need visual proof
            that they actually used the product.
          </p>
          <a
            href="#waitlist"
            className="mt-10 inline-flex h-12 w-full items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-ink transition hover:bg-slate-100 sm:w-auto"
          >
            Join the waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            The problem
          </p>
          <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
            Honest reviews are expensive to prove
          </h2>
          <ul className="mt-10 space-y-8">
            {problems.map((item) => (
              <li key={item.title} className="border-l-2 border-teal/40 pl-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
              How it works
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Three steps from login to published proof
            </h2>
            <ol className="mt-10 space-y-10">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#0d2338] text-white">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="waitlist" className="mx-auto max-w-2xl px-5 py-16 sm:px-6 sm:py-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-teal">
            Early access
          </p>
          <h2 className="mt-3 text-center text-2xl font-semibold sm:text-3xl">
            Join the waitlist
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Leave your email. We’ll notify you when documented in-app captures
            are ready for reviewers.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 px-5 py-8 text-center text-sm text-slate-500 sm:px-6">
        Early idea test — not a finished product.{" "}
        <a
          href="mailto:hello@proofshot.app"
          className="font-medium text-teal underline-offset-2 hover:underline"
        >
          hello@proofshot.app
        </a>
      </footer>
    </div>
  );
}
