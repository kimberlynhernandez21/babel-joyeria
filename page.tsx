import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Babel | Joyería de Compromiso para Parejas Guatemaltecas",
  description:
    "Conoce la historia de Babel, joyería especializada en anillos de compromiso y argollas de matrimonio para parejas en Guatemala. Fabricación artesanal con materiales de primera calidad.",
}

export default function Nosotros() {
  return (
    <main className="bg-[#faf7f2] text-gray-900">

      {/* HERO */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <p className="text-[#C9A84C] tracking-widest text-sm uppercase mb-4">Nuestra Historia</p>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
          Babel — Joyas que Hablan por Ti
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Somos una joyería guatemalteca especializada en crear los anillos de compromiso y argollas
          de matrimonio más especiales para parejas en Guatemala. Cada pieza cuenta una historia única.
        </p>
      </section>

      {/* HISTORIA */}
      <section className="bg-white px-6 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Babel nació de una convicción simple: cada pareja guatemalteca merece una joya que esté
              a la altura del momento más importante de su vida. Nos especializamos en anillos de
              compromiso y argollas de matrimonio fabricados en oro amarillo, oro rosa y oro blanco,
              con piedras preciosas de la más alta calidad.
            </p>
            <p className="text-gray-600 mb-4">
              El nombre Babel no es casualidad. Al igual que la torre que buscaba alcanzar el cielo,
              cada joya que creamos es un símbolo de algo grandioso: el amor y el compromiso de dos
              personas que deciden construir una vida juntas.
            </p>
            <p className="text-gray-600">
              Trabajamos directamente con cada pareja, asesorándolas de forma personalizada para
              encontrar o crear la pieza perfecta. Nuestro proceso es transparente, accesible y
              completamente adaptado al mercado guatemalteco.
            </p>
          </div>
          <div className="bg-[#0a0a0a] rounded-2xl p-8 text-white text-center">
            <p className="text-[#C9A84C] text-5xl font-serif font-bold mb-2">100%</p>
            <p className="text-gray-300 mb-6">Fabricación artesanal</p>
            <p className="text-[#C9A84C] text-5xl font-serif font-bold mb-2">GT</p>
            <p className="text-gray-300 mb-6">Diseñado para Guatemala</p>
            <p className="text-[#C9A84C] text-5xl font-serif font-bold mb-2">∞</p>
            <p className="text-gray-300">Garantía de calidad</p>
          </div>
        </div>
      </section>

      {/* VALORES E-E-A-T */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">Por Qué Confiar en Babel</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Somos una joyería guatemalteca con experiencia real en fabricación y venta de joyas de
          compromiso. Estos son nuestros compromisos contigo:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Materiales certificados",
              desc: "Trabajamos exclusivamente con oro de 14k y 18k certificado, y piedras preciosas con documentación de procedencia. Nunca vendemos materiales de origen dudoso.",
            },
            {
              title: "Asesoría personalizada",
              desc: "Cada cliente recibe atención directa de nuestros especialistas. Te acompañamos desde la elección del diseño hasta la entrega final, sin prisa y sin presión.",
            },
            {
              title: "Precios transparentes",
              desc: "En Babel no hay costos ocultos. Te explicamos exactamente en qué se desglosa el precio de tu joya: material, fabricación y acabado. Sin sorpresas.",
            },
            {
              title: "Garantía de satisfacción",
              desc: "Todas nuestras joyas tienen garantía de fabricación. Si algo no está perfecto, lo corregimos sin costo. Tu satisfacción es nuestra prioridad.",
            },
            {
              title: "Ajustes sin costo",
              desc: "Si la talla del anillo no es exacta, hacemos el ajuste gratuitamente dentro de los primeros 30 días de la compra. Queremos que tu joya quede perfecta.",
            },
            {
              title: "Experiencia en el mercado guatemalteco",
              desc: "Conocemos el mercado guatemalteco, los presupuestos reales de las parejas jóvenes y las tendencias locales. Eso nos permite ofrecerte opciones que realmente se adaptan a tu realidad.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-serif font-semibold text-lg mb-2 text-[#C9A84C]">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO DE FABRICACIÓN */}
      <section className="bg-[#0a0a0a] text-white px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">El Arte detrás de Cada Pieza</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Cada anillo Babel pasa por un proceso artesanal cuidadoso antes de llegar a tus manos.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              { step: "01", title: "Diseño", desc: "Creamos el boceto técnico de tu joya, ya sea de nuestra colección o un diseño personalizado." },
              { step: "02", title: "Fundición", desc: "Fundimos el oro o la plata a alta temperatura y lo moldeamos con precisión artesanal." },
              { step: "03", title: "Montaje", desc: "Colocamos las piedras con monturas de precisión para garantizar que queden perfectamente seguras." },
              { step: "04", title: "Acabado", desc: "Pulimos, limpiamos y hacemos la inspección final de calidad antes de la entrega." },
            ].map((item) => (
              <div key={item.step}>
                <p className="text-[#C9A84C] text-3xl font-serif font-bold mb-2">{item.step}</p>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-4">¿Lista para comenzar?</h2>
        <p className="text-gray-600 mb-8">
          Contáctanos por WhatsApp y cuéntanos tu historia. Estamos aquí para ayudarte a crear
          la joya perfecta para ese momento único.
        </p>
        <a
          href="https://wa.me/50255601750"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#C9A84C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#b8953d] transition-colors"
        >
          Habla con nosotros por WhatsApp
        </a>
      </section>

    </main>
  )
}
