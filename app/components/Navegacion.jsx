import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from "@remix-run/react";



const Navegacion = () => {
  return (
    <nav className="text-lg flex justify-center gap-3 py-6">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white p-1 font-bold bg-amber-500 rounded-sm"
            : "text-white font-bold p-1 hover:underline transition-all"
        }
        to="/">
        Inicio
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white p-1 font-bold bg-amber-500 rounded-sm"
            : "text-white font-bold p-1 hover:underline transition-all"
        }
        to="/nosotros">
        Nosotros
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white p-1 font-bold bg-amber-500 rounded-sm"
            : "text-white font-bold p-1 hover:underline transition-all"
        }
        to="/guitarras">
        Tienda
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white p-1 font-bold bg-amber-500 rounded-sm"
            : "text-white font-bold p-1 hover:underline transition-all"
        }
        to="blog">
        Blog
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-white p-1 font-bold bg-amber-500 rounded-sm flex items-center justify-center"
            : "text-white font-bold p-1 hover:underline transition-all flex items-center justify-center"
        }
        to="shopping">
        <FaShoppingCart />
      </NavLink>
     
    </nav>
  );
};

export default Navegacion;
