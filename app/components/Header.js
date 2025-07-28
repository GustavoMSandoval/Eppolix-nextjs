'use client'

import Image from 'next/image'
import React, { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-around px-6 py-4 md:px-12 bg-white shadow-sm">
        {/* Logo */}
        <div>
          <Image 
            src="/eppolix.png"
            width={150}
            height={40}
            alt="Logo"
            priority
          />
        </div>

        <ul className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
          <li><a href="#" className='nav-link'>Home</a></li>
          <li><a href="#" className='nav-link'>Empresa</a></li>
          <li><a href="#" className='nav-link'>Serviços</a></li>
          <li><a href="#" className='nav-link'>Tecnologia</a></li>
          <li><a href="#" className='nav-link'>Tratamento</a></li>
          <li><a href="#" className='nav-link'>Legislação</a></li>
          <li><a href="#" className='nav-link'>Contato</a></li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" width="32">
                <path fill="#000" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 0 24 24" width="32">
                <path fill="#000" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col mt-16 gap-6 px-6 text-gray-800 text-lg">
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#" onClick={toggleMenu}>Empresa</a></li>
          <li><a href="#" onClick={toggleMenu}>Serviços</a></li>
          <li><a href="#" onClick={toggleMenu}>Tecnologia</a></li>
          <li><a href="#" onClick={toggleMenu}>Tratamento</a></li>
          <li><a href="#" onClick={toggleMenu}>Legislação</a></li>
          <li><a href="#" onClick={toggleMenu}>Contato</a></li>
        </ul>
      </div>

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ease-in-out"
        ></div>
      )}
    </header>
  )
}
