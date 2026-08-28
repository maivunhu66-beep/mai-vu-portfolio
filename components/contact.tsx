import { Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LinkedInIcon } from '@/components/icons'
import { CONTACT } from '@/lib/site-data'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-[0.08]" />
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/70">
          <span aria-hidden className="h-px w-6 bg-accent" />
          Contact
          <span aria-hidden className="h-px w-6 bg-accent" />
        </span>
        <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
          Let&apos;s turn data into better decisions.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
          I&apos;m interested in business analytics, consulting, financial-services, and
          operations opportunities.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={CONTACT.emailHref} className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full gap-2 bg-accent text-accent-foreground [a]:hover:bg-accent/85"
            >
              <Mail />
              Email Mai
            </Button>
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <LinkedInIcon />
              LinkedIn
            </Button>
          </a>
          <a
            href={CONTACT.resume}
            download="Mai-Vu-Resume.pdf"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full gap-2 border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Download />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
