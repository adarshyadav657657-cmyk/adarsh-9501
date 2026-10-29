import { Atom, ClipboardCheck, FlaskConical, Lightbulb } from 'lucide-react'
import { SectionHeading } from './section-heading'

const skills = [
  { icon: Atom, title: 'Chemistry fundamentals' },
  { icon: ClipboardCheck, title: 'Pharmaceutical Quality Control concepts' },
  { icon: FlaskConical, title: 'Laboratory safety and basic analytical techniques' },
  { icon: Lightbulb, title: 'Continuous learning and problem-solving' },
]

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="02 / Capabilities" title="Skills" id="skills-title" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-navy/30 hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-white">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-pretty font-semibold leading-snug text-navy-deep">{title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
