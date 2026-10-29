import { GraduationCap, Microscope, ShieldCheck, TrendingUp } from 'lucide-react'
import { SectionHeading } from './section-heading'

const interests = [
  { icon: ShieldCheck, label: 'Pharmaceutical quality control' },
  { icon: Microscope, label: 'Laboratory testing' },
  { icon: GraduationCap, label: 'Analytical chemistry' },
  { icon: TrendingUp, label: 'Professional development' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="01 / Introduction" title="About Me" id="about-title" />
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            I have completed my BSc and MSc in Chemistry. I am interested in pharmaceutical quality control,
            laboratory testing, analytical chemistry, and professional development.
          </p>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-deep">Areas of interest</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {interests.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border bg-secondary px-4 py-3 text-sm font-medium text-secondary-foreground"
                >
                  <Icon className="size-4 shrink-0 text-navy" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
