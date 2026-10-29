import { Target } from 'lucide-react'
import { SectionHeading } from './section-heading'

export function CareerGoal() {
  return (
    <section id="career-goal" aria-labelledby="career-goal-title" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="03 / Direction" title="Career Goal" id="career-goal-title" />
        <div className="relative overflow-hidden rounded-2xl bg-navy-deep p-8 text-white md:p-12">
          <Target
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -bottom-8 size-48 text-white/5 md:size-64"
          />
          <blockquote className="relative max-w-3xl text-pretty font-serif text-2xl leading-snug md:text-3xl">
            {'\u201C'}To begin a career in pharmaceutical quality control and develop practical laboratory
            skills.{'\u201D'}
          </blockquote>
        </div>
      </div>
    </section>
  )
}
