import AboutAndStats01 from '@/components/shadcn-space/blocks/about-us-01/index'
import Contact from '@/components/shadcn-space/blocks/contact-01/index'
import CTA from '@/components/shadcn-space/blocks/cta-01/cta'
import Faq from '@/components/shadcn-space/blocks/faq-01/faq'
import Footer from '@/components/shadcn-space/blocks/footer-01/footer'

import AgencyHeroSection from '@/components/shadcn-space/blocks/hero-01/index'
import Team from '@/components/shadcn-space/blocks/team-02/team'

export default function Page() {
  return (
    <div>
        <section id="home">
          <AgencyHeroSection />
        </section>

        <section id="about" className="mb-16 sm:mb-20 lg:mb-24">
          <AboutAndStats01 />
        </section>

        <section id="services" className="mb-16 sm:mb-20 lg:mb-24">
          <Team />
        </section>

        <section id="faq" className="mb-16 sm:mb-20 lg:mb-24">
          <Faq />
        </section>

        <section id="contact" className="mb-16 sm:mb-20 lg:mb-24">
          <Contact />
        </section>

        <section className="mb-12 sm:mb-16">
          <CTA />
        </section>

        <section>
          <Footer />
        </section>
    </div>
  )
}
