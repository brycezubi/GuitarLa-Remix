import Logo from '../../public/img/logo.svg'
import { Link } from '@remix-run/react'
import Navegacion from './Navegacion'


const Header = () => {
  return (
    <header className='head'>
      <div className="contenedor py-8 w-5/6 md:flex justify-between items-center">
        <Link to='/'>
          <img 
            className='block max-w-xl mx-auto w-full pb-2 md:pb-0'
            src={Logo} 
            alt='GuitarLa guitarras electricas y acusticas' />
        </Link>
        
        <Navegacion />
      </div>
    </header>
  )
}

export default Header