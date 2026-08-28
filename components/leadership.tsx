import { Award, GraduationCap, Sparkles, Users } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { LEADERSHIP } from '@/lib/site-data'

const TYPE_ICON: Record<string, typeof Award> = {
  Leadership: Users,
  Community: Sparkles,
  Networking: Users,
  Award: Award,
  Certification: GraduationCap,
}

export function Leadership() {
  return (
    <section id="leadership" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Leadership & Recognition"
          title="Beyond the analysis."
          description="Involvement, awards, and certifications that shape how I lead and collaborate."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEADERSHIP.map((item) => {
            const Icon = TYPE_ICON[item.type] ?? Award
            return (
              <li
                key={item.title}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="size-5" />
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                    {item.type}
                  </span>
                  <h3 className="mt-1 font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
