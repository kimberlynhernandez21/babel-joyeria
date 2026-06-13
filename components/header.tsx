'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-semibold tracking-[0.2em] text-primary uppercase">
              Babel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#productos"
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors"
            >
              Productos
            </Link>
            <Link
              href="#nosotros"
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              className="text-sm font-medium tracking-wide text-foreground/70 hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20joyas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium tracking-wide rounded-full hover:bg-gold-dark transition-colors"
            >
              Agenda tu cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <Link
                href="#productos"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                Productos
              </Link>
              <Link
                href="#nosotros"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                Nosotros
              </Link>
              <Link
                href="#contacto"
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
              >
                Contacto
              </Link>
              <a
                href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20joyas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-gold-dark transition-colors mt-2"
              >
                Agenda tu cita
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
