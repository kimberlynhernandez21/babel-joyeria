'use client'

import Image from 'next/image'
import { useState } from 'react'

const products = [
  {
    id: 1,
    name: 'Anillo Solitario Oro 18k',
    description: 'Diseño clásico con diamante central',
    price: 'Q 8,500',
    image: '/images/ring-gold-1.png',
    category: 'oro',
  },
  {
    id: 2,
    name: 'Anillo Elegancia Plata',
    description: 'Plata 925 con circonita brillante',
    price: 'Q 2,800',
    image: '/images/ring-silver-1.png',
    category: 'plata',
  },
  {
    id: 3,
    name: 'Set Parejas Oro',
    description: 'Dos anillos oro 14k complementarios',
    price: 'Q 12,500',
    image: '/images/set-gold.png',
    category: 'sets',
  },
  {
    id: 4,
    name: 'Set Parejas Plata',
    description: 'Dos anillos plata 925 grabables',
    price: 'Q 4,200',
    image: '/images/set-silver.png',
    category: 'sets',
  },
  {
    id: 5,
    name: 'Anillo Promesa Oro',
    description: 'Oro 14k con diseño moderno',
    price: 'Q 6,200',
    image: '/images/ring-gold-2.png',
    category: 'oro',
  },
  {
    id: 6,
    name: 'Anillo Eterno Oro 18k',
    description: 'Banda de oro con diamantes',
    price: 'Q 15,000',
    image: '/images/hero-ring.png',
    category: 'oro',
  },
]

const categories = [
  { id: 'todos', label: 'Todos' },
  { id: 'oro', label: 'Oro' },
  { id: 'plata', label: 'Plata' },
  { id: 'sets', label: 'Sets' },
]

export function Products() {
  const [activeCategory, setActiveCategory] = useState('todos')

  const filteredProducts = activeCategory === 'todos' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="productos" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Nuestra Colección
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance">
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
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary'
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
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-secondary/30 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full uppercase">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-semibold text-primary">
                    {product.price}
                  </span>
                  <a
                    href={`https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-gold-dark transition-colors"
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
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
