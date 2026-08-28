import { ArrowRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LinkedInIcon } from '@/components/icons'
import { CONTACT, HERO_METRICS } from '@/lib/site-data'

const BARS = [42, 58, 49, 71, 63, 84, 78]

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-[0.5]" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-36">
        {/* Copy */}
        <div className="animate-fade-up">
          <p className="text-xs font-semibold tracking-[0.22em] text-accent uppercase">
            Business Analytics · Finance · Strategy
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
            Turning complex data into clear business decisions.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I&apos;m Mai Vu, a Business Analytics and Finance student at the University
            of Illinois Chicago. I use data analysis, visualization, and business
            strategy to uncover operational insights and communicate practical
            recommendations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#projects">
              <Button size="lg" className="w-full gap-2 sm:w-auto">
                Explore My Work
                <ArrowRight />
              </Button>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full gap-2 sm:w-auto"
              >
                <LinkedInIcon />
                Connect on LinkedIn
              </Button>
            </a>
          </div>
        </div>

        {/* Analytics visual */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative rounded-xl border border-border bg-card p-5 shadow-[0_1px_0_0_var(--border),0_20px_50px_-30px_rgba(23,41,74,0.35)] sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Delivery Performance
                </p>
                <p className="mt-1 font-serif text-2xl text-foreground">Weekly KPI Overview</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                <TrendingUp className="size-3.5" />
                Performance Overview
              </span>
            </div>

            {/* Bar chart */}
            <div className="mt-6 flex h-36 items-stretch gap-2.5" aria-hidden>
              {BARS.map((h, i) => (
                <div key={i} className="flex flex-1 flex-col justify-end">
                  <div
                    className="w-full rounded-t-sm bg-primary/85"
                    style={{
                      height: `${h}%`,
                      background:
                        i === BARS.length - 1
                          ? 'var(--accent)'
                          : undefined,
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[11px] font-medium text-muted-foreground">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <span key={i} className="flex-1 text-center">
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* KPI cards */}
          <dl className="mt-4 grid grid-cols-2 gap-4">
            {HERO_METRICS.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-border bg-card p-4"
              >
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-serif text-2xl font-medium text-foreground sm:text-3xl">
                    {m.value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
