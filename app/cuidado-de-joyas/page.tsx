import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cuidado de Joyas de Oro y Plata en Guatemala | Babel Joyería",
  description:
    "Aprende cómo cuidar tus joyas de oro y plata para que duren toda la vida. Guía completa de mantenimiento para anillos de compromiso y argollas de matrimonio en Guatemala.",
}

export default function CuidadoDeJoyas() {
  return (
    <main className="bg-[#faf7f2] text-gray-900">

      {/* HERO */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <p className="text-[#C9A84C] tracking-widest text-sm uppercase mb-4">Guía de Cuidado</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          Cómo Cuidar tus Joyas de Oro y Plata
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tu anillo de compromiso o argolla de matrimonio es una inversión para toda la vida. Con el cuidado
          correcto, tus joyas Babel mantendrán su brillo y calidad por siempre.
        </p>
      </section>

      {/* CUIDADO ORO */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4">Cuidado del Oro Amarillo, Rosa y Blanco</h2>
          <p className="text-gray-600 mb-8">
            El oro es uno de los metales más duraderos del mundo, pero requiere cuidados específicos para
            mantener su brillo original. Esto aplica especialmente al clima de Guatemala, donde la humedad
            y la temperatura pueden afectar las joyas si no se cuidan correctamente.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">1</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Limpieza semanal en casa</h3>
                <p className="text-gray-600">
                  Mezcla unas gotas de jabón neutro con agua tibia. Sumerge tu anillo por 10 minutos y
                  frota suavemente con un cepillo de dientes de cerdas suaves. Enjuaga con agua tibia y
                  seca con un paño suave de algodón. Evita el papel de cocina ya que puede rayar el metal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">2</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Qué evitar con tus joyas de oro</h3>
                <p className="text-gray-600">
                  Retira tu anillo antes de: aplicar cremas o perfumes, lavar trastos, hacer ejercicio,
                  nadar en piscinas con cloro, y dormir. El cloro es especialmente dañino para el oro
                  blanco y puede deteriorar el acabado rodio que le da su color plateado.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">3</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Almacenamiento correcto</h3>
                <p className="text-gray-600">
                  Guarda cada joya por separado en una cajita de tela o en la caja original de Babel.
                  El oro puede rayarse al rozar con otras joyas. En Guatemala, evita guardarlas en lugares
                  muy húmedos como el baño, ya que la humedad puede afectar las piedras y el metal.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C] flex items-center justify-center text-white font-bold flex-shrink-0 mt-1">4</div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Mantenimiento profesional anual</h3>
                <p className="text-gray-600">
                  Recomendamos una revisión profesional cada 12 meses. En Babel revisamos el estado de
                  las monturas, verificamos que las piedras estén bien sujetas, pulimos el metal y
                  hacemos limpieza ultrasónica sin costo adicional para nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CUIDADO PLATA */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4">Cuidado de las Churumbelas y Joyas de Plata</h2>
          <p className="text-gray-600 mb-8">
            La plata es un metal noble que requiere cuidados específicos. A diferencia del oro, la plata
            se oxida con el tiempo formando una capa oscura llamada pátina. Esto es completamente normal
            y fácil de prevenir con los cuidados adecuados.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-serif font-semibold text-lg mb-3 text-[#C9A84C]">¿Por qué se oscurece la plata?</h3>
              <p className="text-gray-600 text-sm">
                La plata reacciona con el azufre presente en el aire y en algunos productos como perfumes,
                lociones y alimentos. En Guatemala, el clima cálido y húmedo puede acelerar este proceso.
                La buena noticia es que la oxidación no daña la plata, solo afecta su apariencia visual.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-serif font-semibold text-lg mb-3 text-[#C9A84C]">Cómo quitar la oxidación</h3>
              <p className="text-gray-600 text-sm">
                Para limpiar plata oxidada en casa: coloca papel aluminio en un recipiente, agrega agua
                caliente y una cucharada de bicarbonato. Sumerge la joya por 5 minutos. El proceso
                electroquímico transfiere la oxidación al aluminio. Enjuaga y seca bien.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-serif font-semibold text-lg mb-3 text-[#C9A84C]">Úsala regularmente</h3>
              <p className="text-gray-600 text-sm">
                Paradójicamente, usar la plata con frecuencia ayuda a mantenerla brillante. La fricción
                natural del uso diario pule el metal suavemente. Si guardas una churumbela de plata por
                mucho tiempo sin usarla, se oxidará más rápido.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-serif font-semibold text-lg mb-3 text-[#C9A84C]">Almacenamiento antioxidante</h3>
              <p className="text-gray-600 text-sm">
                Guarda tus joyas de plata en bolsas ziplock con todo el aire expulsado, o junto a una
                tiza de pizarrón que absorbe la humedad. También puedes usar las bolsas anti-tarnish
                especiales que incluimos con cada compra en Babel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÑALES DE ALERTA */}
      <section className="bg-[#0a0a0a] text-white px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-4 text-center">Señales de que tu Joya Necesita Revisión</h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Aprende a identificar cuándo tu anillo de compromiso o argolla necesita atención profesional.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Piedra floja", desc: "Si sientes que la piedra se mueve o escuchas un sonido al moverla, llévala a revisión inmediatamente para evitar perderla." },
              { title: "Metal desgastado", desc: "Si la montura se ve muy delgada o desgastada, especialmente en la parte inferior del aro, es momento de un refuerzo profesional." },
              { title: "Cambio de color", desc: "Si el oro blanco se ve amarillento, necesita un re-baño de rodio. En Babel realizamos este servicio para mantener el color original." },
            ].map((item) => (
              <div key={item.title} className="border border-[#C9A84C]/30 rounded-xl p-6">
                <h3 className="text-[#C9A84C] font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-4">¿Necesitas mantenimiento para tu joya?</h2>
        <p className="text-gray-600 mb-8">
          En Babel ofrecemos servicio de limpieza, pulido y revisión para todas nuestras joyas.
          Contáctanos por WhatsApp para coordinar.
        </p>
        <a
          href="https://wa.me/50255601750"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b8953d] transition-colors"
        >
          Consulta por WhatsApp
        </a>
      </section>

    </main>
  )
}
