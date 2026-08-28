import { CONTACT } from '@/lib/site-data'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-primary-foreground/15 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-md bg-primary-foreground/10 font-serif text-xs font-semibold">
            MV
          </span>
          <span className="text-sm text-primary-foreground/75">
            Designed and built for Mai Vu.
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-primary-foreground/60">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:text-primary-foreground"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.emailHref}
            className="transition-colors hover:text-primary-foreground focus-visible:outline-none focus-visible:text-primary-foreground"
          >
            Email
          </a>
          <span>&copy; {year}</span>
        </div>
      </div>
    </footer>
  )
}
