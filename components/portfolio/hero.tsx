import { ArrowRight, FlaskConical } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="bg-navy-deep text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:py-28">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80">
            <FlaskConical className="size-3.5" aria-hidden="true" />
            Chemistry &amp; Quality Control
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Adarsh Yadav
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/80 md:text-xl">
            MSc Chemistry Graduate | Aspiring Pharmaceutical Quality Control Professional
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy-deep transition-colors hover:bg-white/90"
            >
              Get in touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              About me
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">Education</p>
          <ul className="mt-5 flex flex-col gap-5">
            <li className="border-l-2 border-white/40 pl-4">
              <p className="font-serif text-xl font-semibold">MSc Chemistry</p>
              <p className="text-sm text-white/70">Master of Science</p>
            </li>
            <li className="border-l-2 border-white/40 pl-4">
              <p className="font-serif text-xl font-semibold">BSc Chemistry</p>
              <p className="text-sm text-white/70">Bachelor of Science</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
