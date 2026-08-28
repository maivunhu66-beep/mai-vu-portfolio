import { NavBar } from '@/components/nav-bar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { FeaturedProjects } from '@/components/featured-projects'
import { Skills } from '@/components/skills'
import { Leadership } from '@/components/leadership'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
