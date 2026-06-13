'use client'

import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Anillos de Compromiso en Oro Rosa',
    description: 'Cálido oro rosa de 18k con diamante central de talla brillante.',
    price: 'Q 8,500',
    image: '/images/oro-rosa.png',
    category: 'oro-rosa',
    tag: 'Oro Rosa',
  },
  {
    id: 2,
    name: 'Anillos en Oro Amarillo',
    description: 'El clásico atemporal en oro amarillo de 18k con solitario.',
    price: 'Q 7,900',
    image: '/images/oro-amarillo.png',
    category: 'oro-amarillo',
    tag: 'Oro Amarillo',
  },
  {
    id: 3,
    name: 'Churumbelas en Oro Blanco',
    description: 'Banda de eternidad en oro blanco engastada con diamantes.',
    price: 'Q 11,200',
    image: '/images/oro-blanco.png',
    category: 'oro-blanco',
    tag: 'Oro Blanco',
  },
  {
    id: 4,
    name: 'Argollas de Matrimonio Grabadas',
    description: 'Par de argollas pulidas con grabado personalizado incluido.',
    price: 'Q 9,600',
    image: '/images/argollas.png',
    category: 'argollas',
    tag: 'Argollas',
  },
  {
    id: 5,
    name: 'Anillos de Compromiso en Oro Rosa',
    description: 'Diseño moderno en oro rosa con halo de diamantes.',
    price: 'Q 12,500',
    image: '/images/oro-rosa.png',
    category: 'oro-rosa',
    tag: 'Oro Rosa',
  },
  {
    id: 6,
    name: 'Argollas de Matrimonio Grabadas',
    description: 'Acabado mate y pulido con fecha grabada a mano.',
    price: 'Q 10,400',
    image: '/images/argollas.png',
    category: 'argollas',
    tag: 'Argollas',
  },
]

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'oro-rosa', label: 'Oro Rosa' },
  { id: 'oro-amarillo', label: 'Oro Amarillo' },
  { id: 'oro-blanco', label: 'Oro Blanco' },
  { id: 'argollas', label: 'Argollas' },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="productos" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-4">
            Nuestra Colección
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-foreground text-balance">
            Productos Destacados
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada pieza es elaborada con los mejores materiales y la dedicación artesanal
            que caracteriza a Babel.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/60'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden border border-primary/20 hover:border-primary/60 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-secondary overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/15 text-primary text-xs font-medium rounded-full uppercase tracking-wide border border-primary/30">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-primary transition-colors text-balance">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-semibold text-primary">
                    {product.price}
                  </span>
                  <a
                    href={`https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-primary text-primary text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/50212345678?text=Hola%2C%20me%20gustaría%20ver%20todo%20el%20catálogo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold-dark transition-colors"
          >
            Ver catálogo completo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
