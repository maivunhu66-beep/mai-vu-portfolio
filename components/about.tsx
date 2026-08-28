import { SectionHeading } from '@/components/section-heading'
import { ABOUT_FACTS } from '@/lib/site-data'

export function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About"
              title="Analysis grounded in business context."
            />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am an international student from Vietnam pursuing degrees in
                Information &amp; Decision Sciences, with a concentration in Business
                Analytics, and Finance at the University of Illinois Chicago. My
                experience spans logistics analytics, financial reconciliation,
                dashboard development, predictive modeling, and business strategy.
              </p>
              <p>
                I enjoy translating technical findings into recommendations that
                stakeholders can understand and act on.
              </p>
            </div>
          </div>

          <div className="lg:pt-4">
            <dl className="divide-y divide-border rounded-xl border border-border bg-card">
              {ABOUT_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 px-5 py-4 sm:px-6"
                >
                  <dt className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                    {fact.label}
                  </dt>
                  <dd className="text-base font-medium text-pretty text-foreground">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
