import { Link2 as Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from './section-heading'

// Placeholder contact details — replace each `value` with your real information.
const contacts = [
  { icon: Mail, label: 'Email', value: '[Add your email address]' },
  { icon: Phone, label: 'Phone', value: '[Add your phone number]' },
  { icon: Linkedin, label: 'LinkedIn', value: '[Add your LinkedIn profile]' },
  { icon: MapPin, label: 'Location', value: '[Add your city / location]' },
]

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="04 / Get in touch" title="Contact" id="contact-title" />
        <p className="-mt-4 mb-10 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          I am open to opportunities and conversations in pharmaceutical quality control and laboratory work.
        </p>
        <ul className="grid gap-5 sm:grid-cols-2">
          {contacts.map(({ icon: Icon, label, value }) => (
            <li key={label} className="flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-navy">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                <p className="truncate font-medium text-navy-deep">{value}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
