import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Anillos de Compromiso en Guatemala | Babel Joyería",
  description:
    "Descubre la colección de anillos de compromiso en oro amarillo, oro rosa y oro blanco de Babel. Diseños exclusivos para parejas guatemaltecas. Agenda tu cita por WhatsApp.",
}

export default function AnillosDeCompromiso() {
  return (
    <main className="bg-[#faf7f2] text-gray-900">

      {/* HERO */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <p className="text-[#C9A84C] tracking-widest text-sm uppercase mb-4">Babel Joyería Guatemala</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          Anillos de Compromiso para Parejas en Guatemala
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          En Babel creamos anillos de compromiso en oro amarillo, oro rosa y oro blanco, diseñados especialmente
          para parejas guatemaltecas que buscan calidad, autenticidad y un precio accesible.
        </p>
        <a
          href="https://wa.me/50255601750"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b8953d] transition-colors"
        >
          Agenda tu cita por WhatsApp
        </a>
      </section>

      {/* TIPOS DE ORO */}
      <section className="bg-white px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Tipos de Oro para tu Anillo de Compromiso</h2>
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
          Elegir el material correcto es el primer paso para encontrar el anillo perfecto. En Babel trabajamos con
          tres tipos de oro, cada uno con características únicas para cada pareja guatemalteca.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="border border-[#C9A84C]/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-semibold mb-3">Oro Amarillo</h3>
            <p className="text-gray-600 text-sm">
              El clásico por excelencia. El oro amarillo de 14k o 18k es el material más tradicional para anillos
              de compromiso en Guatemala. Su color cálido y brillante lo hace inconfundible y resistente al
              paso del tiempo.
            </p>
          </div>
          <div className="border border-[#C9A84C]/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-semibold mb-3">Oro Rosa</h3>
            <p className="text-gray-600 text-sm">
              El favorito de las parejas jóvenes guatemaltecas. El oro rosa combina oro puro con cobre para
              crear ese tono rosado romántico y moderno. Es perfecto para diseños delicados y femeninos,
              especialmente en sets de compromiso.
            </p>
          </div>
          <div className="border border-[#C9A84C]/30 rounded-xl p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-serif font-semibold mb-3">Oro Blanco</h3>
            <p className="text-gray-600 text-sm">
              Elegancia contemporánea. El oro blanco se obtiene mezclando oro puro con metales blancos como
              el paladio. Su acabado plateado y refinado lo hace ideal para resaltar piedras preciosas como
              el moissanite y los diamantes.
            </p>
          </div>
        </div>
      </section>

      {/* CÓMO ELEGIR */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">
          Cómo Elegir el Anillo de Compromiso Perfecto en Guatemala
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#C9A84C]">1. Define tu presupuesto</h3>
            <p className="text-gray-600">
              En Guatemala, el precio de un anillo de compromiso de calidad puede variar entre Q2,000 y Q15,000
              dependiendo del material, el diseño y la piedra. En Babel ofrecemos opciones accesibles sin
              sacrificar calidad. Te asesoramos personalmente para encontrar la mejor opción dentro de tu
              presupuesto.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#C9A84C]">2. Elige el tipo de piedra</h3>
            <p className="text-gray-600">
              Las opciones más populares en Guatemala son el moissanite, que ofrece el brillo de un diamante
              a un precio mucho más accesible, y los diamantes naturales para quienes buscan lo máximo en
              calidad. También trabajamos con piedras de zirconia de alta calidad para presupuestos más
              ajustados.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#C9A84C]">3. Considera el estilo de vida</h3>
            <p className="text-gray-600">
              Una persona activa necesita un diseño más robusto y con la piedra más protegida. Alguien con
              un estilo más elegante puede optar por una montura tipo solitario o pavé. En Babel analizamos
              el estilo de vida de tu pareja para recomendarte el diseño ideal.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#C9A84C]">4. La talla correcta</h3>
            <p className="text-gray-600">
              Conocer la talla exacta es fundamental. En Guatemala las tallas van del número 4 al 12. Si no
              sabes la talla, puedes traer un anillo que ya use tu pareja o podemos ajustarlo después de la
              entrega sin costo adicional en Babel.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif font-semibold mb-3 text-[#C9A84C]">5. Personalización y grabado</h3>
            <p className="text-gray-600">
              En Babel ofrecemos grabado personalizado en el interior de cada anillo — una fecha especial,
              iniciales o un mensaje corto que haga el momento aún más único. Este servicio está disponible
              en todos nuestros anillos de compromiso para parejas guatemaltecas.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO DE COMPRA */}
      <section className="bg-[#0a0a0a] text-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Proceso de Compra en Babel Guatemala</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Compramos directamente por WhatsApp, sin complicaciones. Así funciona:
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Agenda tu cita", desc: "Contáctanos por WhatsApp y cuéntanos qué buscas. Te respondemos en menos de 2 horas." },
              { step: "02", title: "Elige tu diseño", desc: "Te mostramos opciones según tu presupuesto y estilo. Podemos personalizar cualquier pieza." },
              { step: "03", title: "Recibe tu joya", desc: "Fabricamos tu anillo con los más altos estándares de calidad y te lo entregamos en Guatemala." },
            ].map((item) => (
              <div key={item.step} className="text-left">
                <p className="text-[#C9A84C] text-4xl font-serif font-bold mb-3">{item.step}</p>
                <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-4">¿Listo para encontrar el anillo perfecto?</h2>
        <p className="text-gray-600 mb-8">
          Agenda una consulta gratuita con nuestros expertos en joyería de compromiso para parejas guatemaltecas.
          Sin compromiso, con toda la asesoría que necesitas.
        </p>
        <a
          href="https://wa.me/50255601750"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b8953d] transition-colors"
        >
          Consulta Directa vía WhatsApp
        </a>
      </section>

    </main>
  )
}
