import { Shield, Heart, Award, Truck } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Garantía de por Vida',
    description: 'Todas nuestras joyas incluyen garantía permanente contra defectos de fabricación.',
  },
  {
    icon: Heart,
    title: 'Diseño Personalizado',
    description: 'Creamos piezas únicas adaptadas a tu historia de amor y presupuesto.',
  },
  {
    icon: Award,
    title: 'Certificación de Calidad',
    description: 'Oro y plata certificados con los más altos estándares de pureza.',
  },
  {
    icon: Truck,
    title: 'Envío a Todo Guatemala',
    description: 'Entrega segura y asegurada a cualquier departamento del país.',
  },
]

export function WhyUs() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
            Por Qué Elegirnos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            La diferencia Babel
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Más de 15 años creando momentos inolvidables para parejas guatemaltecas 
            con la más alta calidad y atención personalizada.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-primary p-8 lg:p-12 text-center">
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-serif font-medium text-primary-foreground mb-4 text-balance">
              Tu momento especial merece lo mejor
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              En Babel entendemos la importancia de este paso en tu vida. Por eso, cada pieza 
              es seleccionada y elaborada con el cuidado que tu compromiso merece.
            </p>
            <a
              href="https://wa.me/50212345678?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-primary font-medium tracking-wide rounded-full hover:bg-background transition-all hover:shadow-lg"
            >
              Agenda una Cita Personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
