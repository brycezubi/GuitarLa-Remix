import { MdDelete } from 'react-icons/Md';
import { useOutletContext } from "@remix-run/react";
import { formatearPrecio } from "~/utils/helpers";

const CarritoArticulo = ({ producto }) => {
  const { actualizarCantidad , eliminarArticulo} =  useOutletContext()

  const {imagen,nombre,precio,cantidad, id} = producto
  const total =  precio * cantidad
  return (
    <article
      className="relative grid grid-cols-2 place-items-center pt-8 ">
      <button
          onClick={()=>eliminarArticulo(id)}
         className="absolute top-0 right-0 hover:scale-150 transition-transform">
        <MdDelete color='red'/>
      </button>
      <img
        className="block w-2/3 mx-auto"
        src={imagen}
        alt={`articulo-guitarra-${nombre}`}
      />
      <section className="flex flex-col gap-2">
        <p className="text-2xl font-black text-amber-500">{nombre}</p>
        <p className="font-semibold text-xl text-amber-500">
          Precio :{" "}
          <span className="text-xl font-semibold text-black">
            {formatearPrecio(precio)}
          </span>
        </p>
        <p className="flex flex-col gap-2 font-semibold text-xl text-amber-500">
          Cantidad {" "}
          <select 
            defaultValue={cantidad}
            onChange={e=>actualizarCantidad({
              cantidad:+e.target.value,
              total,
              id
            })}
            className="text-slate-900 text-center border border-slate-800 rounded-md">
            <option value="0">--- Seleccione ---</option>
            <option value="1"> 1 </option>
            <option value="2"> 2 </option>
            <option value="3"> 3 </option>
            <option value="4"> 4 </option>
            <option value="5">5</option>
          </select>
        </p>
        <p className="font-semibold text-xl text-amber-500">
          Subtotal articulo:{" "}
          <span className="text-xl font-semibold text-black">
            {formatearPrecio(total)}
          </span>
        </p>
      </section>
    </article>
  );
};

export default CarritoArticulo;
