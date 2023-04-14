import React from 'react'
import Navegacion from './Navegacion'

const Footer = () => {
  return (
    <footer className='footer bg-gray-800 pt-4 pb-8 lg:pb-2'>
      <div className="contenedor w-5/6 lg:flex lg:justify-between">
        <Navegacion />

        <section className='text-center lg:flex lg:gap-2 lg:items-center'>
          <p className='text-white text-xl font-semibold'>Realizado en Remix</p>
          💗 
          <p className='text-white text-xl font-semibold'>Tailwind CSS {new Date().getFullYear()}</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer