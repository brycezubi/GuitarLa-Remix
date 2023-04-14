import { Link } from "@remix-run/react";
import { formatearPrecio } from "../utils/helpers";

const Articulo = ({ guitar }) => {
  const { nombre, precio, descripcion, imagen, url } = guitar.attributes;
  return (
    <article className="guitarra flex flex-col gap-3 items-center mx-auto w-5/6 lg:w-full lg:flex-row lg:justify-center">
      <img
        className="block mx-auto lg:w-1/2"
        src={imagen.data.attributes.formats.medium.url}
        alt={`guitarra-${nombre}`}
      />
      <section className="flex flex-col gap-4 text-center lg:text-left">
        <h2 className="text-3xl text-amber-500 font-bold">{nombre}</h2>
        <p className="text-2xl font-black">{formatearPrecio(precio)}</p>
        <p className="descripcion">{descripcion}</p>
        <Link className="cta mt-4" to={`/guitarras/articulo/${url}`}>
          Detalles
        </Link>
      </section>
    </article>
  );
};

export default Articulo;
