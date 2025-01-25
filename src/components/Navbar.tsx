"use client"
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-gradient-to-r from-blue-600/95 to-blue-800/95 backdrop-blur-md shadow-lg z-50 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <p className="text-2xl font-bold tracking-wider text-white hover:scale-105 transition-all duration-300 ease-in-out">
              SARAN <span className="text-blue-200">LOJİSTİK</span>
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {['Ana Sayfa', 'Hizmetlerimiz', 'Blog', 'İletişim'].map((item, index) => (
            <Link
              key={index}
              href={item === 'Ana Sayfa' ? '/' : item === 'Hizmetlerimiz' ?  '#hizmetler' : item === 'İletişim' ? '/iletisim' : `/${item.toLowerCase()}`}
              className="relative py-2 text-white/90 hover:text-white transition-colors duration-300 group text-sm uppercase tracking-wider font-medium"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-blue-700/95 to-blue-900/95 backdrop-blur-md shadow-xl transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col space-y-4 px-8 py-6">
          {['Ana Sayfa', 'Hizmetlerimiz', 'Blog', 'İletişim'].map((item, index) => (
            <Link
              key={index}
              href={item === 'Ana Sayfa' ? '/' : item === 'Hizmetlerimiz' ? '#hizmetler' : item === 'İletişim' ? '/iletisim' : `/${item.toLowerCase()}`}
              className="text-white/90 hover:text-white hover:translate-x-2 transition-all duration-300 ease-in-out text-sm uppercase tracking-wider font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 