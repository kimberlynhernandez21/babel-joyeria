'use client'

import Image from 'next/image'
import { useState } from 'react'

const productos = [
  { id: 1, nombre: 'Anillos de Compromiso en Oro Rosa', descripcion: 'Cálido oro rosa de 18k con diamante central de talla brillante.', precio: 'Q 8,500', imagen: '/oro-rosa.webp', categoria: 'oro-rosa', etiqueta: 'Oro Rosa' },
  { id: 2, nombre: 'Anillos en Oro Amarillo', descripcion: 'El clásico atemporal en oro amarillo de 18k con solitario.', precio: 'Q 7,900', imagen: '/oro-amarillo.webp', categoria: 'oro-amarillo', etiqueta: 'Oro Amarillo' },
  { id: 3, nombre: 'Churumbelas en Oro Blanco', descripcion: 'Banda de eternidad en oro blanco engastada con diamantes.', precio: 'Q 11,200', imagen: '/oro-blanco.webp', categoria: 'oro-blanco', etiqueta: 'Oro Blanco' },
  { id: 4, nombre: 'Argollas de Matrimonio Grabadas', descripcion: 'Par de argollas pulidas con grabado personalizado incluido.', precio: 'Q 9,600', imagen: '/argollas.webp', categoria: 'argollas', etiqueta: 'Argollas' },
  { id: 5, nombre: 'Anillos de Compromiso en Oro Rosa', descripcion: 'Diseño moderno en oro rosa con halo de diamantes.', precio: 'Q 12,500', imagen: '/oro-rosa.webp', categoria: 'oro-rosa', etiqueta: 'Oro Rosa' },
  { id: 6, nombre: 'Argollas de Matrimonio Grabadas', descripcion: 'Acabado mate y pulido con fecha grabada a mano.', precio: 'Q 10,400', imagen: '/argollas.webp', categoria: 'argollas', etiqueta: 'Argollas' },
]

const categorias = [
  { id: 'tareas', etiqueta: 'Todos' },
  { id: 'oro-rosa', etiqueta: 'Oro Rosa' },
  { id: 'oro-amarillo', etiqueta: 'Oro Amarillo' },
  { id: 'oro-blanco', etiqueta: 'Oro Blanco' },
  { id: 'argollas', etiqueta: 'Argollas' },
]

export function Products() {
  const [categoriaActiva, setCategoriaActiva] = useState('tareas')
  const productosFiltrados = categoriaActiva === 'tareas' ? productos : productos.filter(p => p.categoria === categoriaActiva)

  return (
    <section id="productos" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">Nuestra Colección</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">Productos Destacados</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">Cada pieza es elaborada con los mejores materiales y la dedicación artesanal que caracteriza a Babel.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categorias.map((categoria) => (
            <button key={categoria.id} onClick={() => setCategoriaActiva(categoria.id)} className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all${categoriaActiva === categoria.id ? ' bg-primary text-primary-foreground' : ' bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/60'}`}>
              {categoria.etiqueta}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {productosFiltrados.map((producto) => (
            <article key={producto.id} className="group bg-card rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="aspect-square relative bg-secondary overflow-hidden">
                <Image src={producto.imagen} alt={producto.nombre} fill className="object-contain p-8 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-primary/15 text-primary text-xs font-medium rounded-full uppercase">{producto.etiqueta}</span></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors">{producto.nombre}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{producto.descripcion}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-semibold text-primary">{producto.precio}</span>
                  <a href={`https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(producto.nombre)}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-primary text-primary text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">Consultar</a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="https://wa.me/50212345678?text=Hola%2C%20me%20gustaría%20ver%20todo%20el%20catálogo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold-dark transition-colors">
            Ver catálogo completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  )
}
