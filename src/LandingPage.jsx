export default function GnJRepsLandingPage() {
  // Use the public logo path so it works correctly in production.
  const logoSrc = "/gnj-logo.png";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-20">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={logoSrc}
              alt="GnJ Reps logo"
              className="h-14 w-auto rounded-xl object-contain"
            />
            <div>
              <div className="text-2xl font-bold tracking-tight text-slate-900">GnJ Reps</div>
              <div className="text-sm text-slate-600">Support for self-represented individuals in Ontario courts</div>
            </div>
          </div>
          <a
            href="#contact"
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
          >
            Book a Consultation
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-amber-50" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
                  Ontario court support for self-represented individuals
                </div>
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl leading-tight">
                  Court is stressful. You do not have to handle it alone.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
                  GnJ Reps helps self-represented individuals organize, structure, and prepare their case with more clarity. When the process feels overwhelming, we help bring order to it.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#services"
                    className="rounded-2xl bg-slate-900 px-6 py-4 text-center text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                  >
                    See Services
                  </a>
                  <a
                    href="#contact"
                    className="rounded-2xl border border-slate-300 px-6 py-4 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Contact Us
                  </a>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">Organize</div>
                    <div className="mt-1 text-sm text-slate-600">Sort facts, timelines, and documents clearly.</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">Structure</div>
                    <div className="mt-1 text-sm text-slate-600">Build clearer, more focused court materials.</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="text-sm font-semibold text-slate-900">Prepare</div>
                    <div className="mt-1 text-sm text-slate-600">Feel more ready for conferences, motions, and filings.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                  <img
                    src={logoSrc}
                    alt="GnJ Reps logo large"
                    className="mx-auto h-72 w-auto max-w-full object-contain"
                  />
                </div>
                <div className="mt-6 rounded-2xl bg-slate-900 p-6 text-white">
                  <div className="text-sm uppercase tracking-[0.2em] text-amber-300">Why GnJ Reps</div>
                  <h2 className="mt-3 text-2xl font-bold leading-tight">Support built for people carrying the weight of court on their own.</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    Many self-represented individuals are overwhelmed by forms, deadlines, evidence, and procedure. We help make the process clearer, more organized, and easier to manage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Services</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Practical support for self-represented individuals
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Clear, focused support to help you prepare your case more effectively.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Case Organization',
                text: 'Help sorting timelines, messages, evidence, and documents into a stronger structure.',
              },
              {
                title: 'Document Support',
                text: 'Help refining affidavits, summaries, and supporting materials so they are easier to follow.',
              },
              {
                title: 'Preparation Support',
                text: 'Help preparing for conferences, motions, and next steps so you feel more ready.',
              },
            ].map((service) => (
              <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-700">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">Why people reach out</div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Court is hard. Doing it alone is harder.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Overwhelmed by forms and deadlines',
                  'Unsure how to organize evidence',
                  'Need help making documents clearer',
                  'Want stronger preparation before court',
                ].map((point) => (
                  <div key={point} className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-200">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl md:p-12">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">Contact</div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">Start with a consultation</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
              Tell us where you are in the process and what kind of support you need. We will help you take the next step with more clarity.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">Website</div>
                <div className="mt-2 text-slate-700">GnJReps.ca</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="text-sm font-semibold text-slate-900">Email</div>
                <div className="mt-2 text-slate-700">info@gnjreps.ca</div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
              Important: GnJ Reps provides support for self-represented individuals. It is not a law firm and does not provide legal representation.
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="GnJ Reps footer logo"
              className="h-10 w-auto rounded-lg object-contain"
            />
            <div>
              <div className="font-bold text-slate-900">GnJ Reps</div>
              <div className="text-sm text-slate-600">Support for self-represented individuals in Ontario courts</div>
            </div>
          </div>
          <div className="text-sm text-slate-500">© 2026 GnJ Reps. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}