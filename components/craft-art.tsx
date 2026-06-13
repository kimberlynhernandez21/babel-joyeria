import Image from 'next/image'

export function CraftArt() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Subtle grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #C9A84C 1px, transparent 1px), linear-gradient(to bottom, #C9A84C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-6">
              Artesanía
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-white leading-[1.15] text-balance">
              El arte detrás de cada pieza
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Cada anillo Babel es diseñado con precisión y dedicación para parejas guatemaltecas.
            </p>
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              <div className="w-12 h-px bg-primary" />
              <span className="text-sm tracking-[0.2em] uppercase text-white/40">
                Diseño · Precisión · Dedicación
              </span>
            </div>
          </div>

          {/* Wireframe Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-primary/5 blur-[100px]" />
              <Image
                src="/images/wireframe-ring.png"
                alt="Boceto técnico wireframe de un anillo Babel"
                width={600}
                height={600}
                className="relative z-10 object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
