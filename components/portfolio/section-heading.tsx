export function SectionHeading({
  eyebrow,
  title,
  id,
}: {
  eyebrow: string
  title: string
  id: string
}) {
  return (
    <div className="mb-10 md:mb-12">
      <p className="text-xs font-semibold uppercase tracking-widest text-navy/70">{eyebrow}</p>
      <h2 id={id} className="mt-2 text-balance font-serif text-3xl font-semibold text-navy-deep md:text-4xl">
        {title}
      </h2>
      <div aria-hidden="true" className="mt-4 h-1 w-12 rounded-full bg-navy" />
    </div>
  )
}
