import type { Project } from '@/lib/site-data'

/**
 * Restrained, data-inspired placeholder visuals rendered with layout primitives.
 * These stand in until real project screenshots are added — no stock imagery.
 */
export function ProjectVisual({
  variant,
  className,
}: {
  variant: Project['visual']
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={
        'relative overflow-hidden rounded-lg border border-border bg-secondary/50 ' +
        (className ?? '')
      }
    >
      <div className="bg-grid absolute inset-0 opacity-[0.4]" />
      <div className="relative p-5">
      
        {variant === 'strategy' && <StrategyViz />}
        {variant === 'model' && (
  <img
    src="/wine-model-results.png"
    alt="Wine quality logistic regression model results"
    className="h-full w-full object-contain"
  />
)}
      </div>
    </div>
  )
}

function DashboardViz() {
  const bars = [55, 40, 72, 48, 63, 80]
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        {['On-time', 'Delayed', 'In transit'].map((t) => (
          <span
            key={t}
            className="rounded-md border border-border bg-card px-2 py-1 text-[10px] font-medium text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex h-24 items-stretch gap-2 rounded-md border border-border bg-card p-3">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col justify-end">
            <div
              className="w-full rounded-t-sm"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1 ? 'var(--accent)' : 'var(--primary)',
                opacity: i === bars.length - 1 ? 1 : 0.85,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function StrategyViz() {
  const nodes = ['ERP', 'CRM', 'BI']
  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="rounded-md border border-primary/30 bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">
        Unified Data Layer
      </div>
      <div className="h-4 w-px bg-border" />
      <div className="flex w-full items-center justify-between gap-2">
        {nodes.map((n) => (
          <div
            key={n}
            className="flex-1 rounded-md border border-border bg-card py-3 text-center text-xs font-semibold text-foreground"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  )
}

function ModelViz() {
  // simple scatter-ish logistic curve
  return (
    <div className="rounded-md border border-border bg-card p-3">
      <div className="flex items-center justify-between text-[10px] font-medium text-muted-foreground">
        <span>Accuracy</span>
        <span className="font-semibold text-accent">85.4%</span>
      </div>
      <svg viewBox="0 0 120 60" className="mt-2 h-24 w-full" role="presentation">
        <line x1="8" y1="52" x2="116" y2="52" stroke="var(--border)" strokeWidth="1" />
        <line x1="8" y1="6" x2="8" y2="52" stroke="var(--border)" strokeWidth="1" />
        <path
          d="M8 50 C 40 48, 55 40, 62 30 C 70 20, 85 12, 116 10"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {[
          [24, 47],
          [40, 44],
          [58, 33],
          [74, 20],
          [96, 13],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.2" fill="var(--primary)" />
        ))}
      </svg>
    </div>
  )
}
