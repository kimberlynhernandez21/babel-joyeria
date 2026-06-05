import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Products } from '@/components/products'
import { WhyUs } from '@/components/why-us'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
