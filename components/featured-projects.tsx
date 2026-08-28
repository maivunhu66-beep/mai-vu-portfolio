'use client'

import { useState } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { ArrowUpRight, Award, X } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { ProjectVisual } from '@/components/project-visual'
import { Button } from '@/components/ui/button'
import { PROJECTS, type Project } from '@/lib/site-data'

export function FeaturedProjects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected case studies."
          description="Each project pairs a business problem with the analysis, tools, and measurable result."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-30px_rgba(23,41,74,0.4)]"
            >
              <div className="p-4 pb-0">
                <ProjectVisual variant={project.visual} className="aspect-[16/10]" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                  {project.category}
                </span>
                <h3 className="mt-2 font-serif text-xl leading-snug text-balance text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="rounded-md px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-5 w-full justify-between"
                  onClick={() => setActive(project)}
                >
                  View Case Study
                  <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog.Root
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null)
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm transition-opacity data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
          <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 max-h-[88vh] w-[calc(100vw-2rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl outline-none transition-all data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0 sm:p-8">
            {active && (
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                      {active.category}
                    </span>
                    <Dialog.Title className="mt-2 font-serif text-2xl leading-snug text-balance text-foreground">
                      {active.title}
                    </Dialog.Title>
                  </div>
                  <Dialog.Close
                    aria-label="Close case study"
                    className="grid size-9 shrink-0 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <X className="size-5" />
                  </Dialog.Close>
                </div>

                <div className="mt-5">
                  <ProjectVisual variant={active.visual} className="aspect-[16/9]" />
                </div>

                <Dialog.Description className="sr-only">
                  Case study details for {active.title}
                </Dialog.Description>

                <div className="mt-6 space-y-6">
                  <Detail label="Business Problem">{active.problem}</Detail>
                  <Detail label="Analytical Process">{active.work}</Detail>
                  <Detail label="Business Recommendations">{active.recommendation}</Detail>

                  {active.result && (
                    <div className="flex items-start gap-3 rounded-lg border border-accent/25 bg-accent/8 p-4">
                      <Award className="mt-0.5 size-5 shrink-0 text-accent" />
                      <p className="text-sm font-medium text-foreground">{active.result}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                      Key Results
                    </p>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-3">
                      {active.metrics.map((m) => (
                        <li
                          key={m}
                          className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-sm font-medium text-pretty text-foreground"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                      Tools
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {active.tools.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  )
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">{label}</p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{children}</p>
    </div>
  )
}
