import Footer from '@/components/shadcn-space/blocks/footer-01/footer'

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <section>
        <Footer />
      </section>
    </>
  )
}
