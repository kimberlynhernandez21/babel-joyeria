import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              Joyería de Compromiso
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground leading-tight text-balance">
              Joyas que hablan por ti
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Descubre nuestra colección exclusiva de anillos y sets de compromiso en oro y plata, 
              diseñados para parejas guatemaltecas que buscan lo mejor.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#productos"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-gold-dark transition-all hover:shadow-lg"
              >
                Ver Colección
              </a>
              <a
                href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20joyas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Contáctanos
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circle */}
              <div className="absolute inset-0 bg-secondary rounded-full scale-90" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-95" />
              
              {/* Main image */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image
                  src="/images/hero-ring.png"
                  alt="Anillo de compromiso Babel"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute top-10 left-0 bg-card px-4 py-2 rounded-full shadow-lg border border-border">
              <span className="text-sm font-medium text-foreground">Oro 18k</span>
            </div>
            <div className="absolute bottom-20 right-0 bg-card px-4 py-2 rounded-full shadow-lg border border-border">
              <span className="text-sm font-medium text-foreground">Garantía de por vida</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Descubre más</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
