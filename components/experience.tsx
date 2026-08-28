import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { EXPERIENCE } from '@/lib/site-data'

export function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied analytics."
          description="Hands-on roles across logistics analytics and financial operations."
        />

        <ol className="mt-12 space-y-10">
          {EXPERIENCE.map((item, i) => (
            <li
              key={item.company}
              className="relative grid gap-6 pl-8 sm:grid-cols-[220px_1fr] sm:gap-10 sm:pl-0"
            >
              {/* Timeline rail (mobile) */}
              <span
                aria-hidden
                className="absolute left-[6px] top-2 size-3 rounded-full border-2 border-accent bg-background sm:hidden"
              />
              {i < EXPERIENCE.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-[11px] top-5 h-[calc(100%+2.5rem)] w-px bg-border sm:hidden"
                />
              )}

              {/* Meta */}
              <div className="sm:border-r sm:border-border sm:pr-8 sm:text-right">
                <p className="text-sm font-semibold text-accent">{item.dates}</p>
                <p className="mt-1 font-serif text-lg text-foreground">{item.company}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-sm text-muted-foreground sm:flex-row-reverse">
                  <MapPin className="size-3.5 shrink-0" />
                  {item.location}
                </p>
              </div>

              {/* Detail */}
              <div>
                <h3 className="text-lg font-semibold text-foreground">{item.role}</h3>
                <ul className="mt-3 space-y-2.5">
                  {item.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
