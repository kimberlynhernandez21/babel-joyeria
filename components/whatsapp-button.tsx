'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50212345678?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20sus%20joyas"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[#25D366] text-white font-medium rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-105 hover:shadow-xl"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
