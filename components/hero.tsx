import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute top-1/2 right-0 lg:right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">Joyería de Compromiso</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-foreground">Joyas que hablan por ti</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">Descubre nuestra colección exclusiva de anillos y conjuntos de compromiso en oro y plata, diseñado para parejas guatemaltecas que buscan lo mejor.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#productos" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors">Ver Colección</a>
              <a href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20joyas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-primary/50 text-primary font-medium rounded-full hover:bg-primary/10 transition-colors">Contáctanos</a>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="aspect-square relative max-w-lg mx-auto">
              <div className="absolute inset-0 border border-primary/20 rounded-full scale-90" />
              <div className="absolute inset-0 border border-primary/10 rounded-full scale-100" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image src="/anillo-de-héroe.webp" alt="Anillo de compromiso Babel" width={500} height={500} className="object-contain drop-shadow-[0_20px_50px_rgba(201,168,76,0.25)]" priority />
              </div>
            </div>
            <div className="absolute top-10 left-0 bg-card/80 backdrop-blur-sm px-4 py-2 border rounded-full"><span className="text-sm font-medium text-primary">Oro 18k</span></div>
            <div className="absolute bottom-20 right-0 bg-card/80 backdrop-blur-sm px-4 py-2 border rounded-full"><span className="text-sm font-medium text-primary">Garantía de por vida</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
