import { BarChart3, Briefcase, Database, Wrench } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { SKILL_GROUPS } from '@/lib/site-data'

const ICONS = [Database, BarChart3, Wrench, Briefcase]

export function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Skills"
          title="A practical analytics toolkit."
          description="Technical depth paired with the business judgment to apply it."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={group.title}
                className="flex flex-col rounded-xl border border-border bg-card p-5"
              >
                <span className="grid size-9 place-items-center rounded-md bg-primary/8 text-primary">
                  <Icon className="size-4.5" />
                </span>
                <h3 className="mt-4 font-serif text-lg text-foreground">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-sm font-medium text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
