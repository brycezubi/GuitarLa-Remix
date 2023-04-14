import { useState } from "react";
import {
  Link,
  useLoaderData,
  isRouteErrorResponse,
  useRouteError,
  useOutletContext,
} from "@remix-run/react";

import { getGuitarrasUrl } from "../models/guitarras.server";
import { formatearPrecio } from "~/utils/helpers";

export const loader = async ({ params }) => {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarrasUrl(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("Error al buscar el Articulo", {
      status: 404,
      statusText: "Articulo No Econtrado",
    });
  }
  return guitarra;
};

export const meta = ({ data }) => {
  if (!data) {
    return [{ title: "GuitarLa -Articulo no encontrado" }];
  }
  return [
    { title: `GuitarLa - ${data.data[0].attributes.nombre}` },
    {
      name: "description",
      content:
        "Encuentra la Mayor Variedad de Guitarras, Amplificadores, Efectos y Accesorios. Marin Import Instrumentos Musicales, Repuestos y Accesorios. Al Mejor Precio.",
    },
    {
      name: "keywords",
      content:
        "guitarras electricas,guitarras acusticas,ofertas,mejores instrumentos",
    },
    { name: "author", content: "cesar zubilete sanchez" },
  ];
};

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="contenedor  w-5/6 text-center error">
        <h1 className="text-amber-500 text-5xl uppercase font-bold">Opps</h1>
        <p className="text-2xl text-blue-800 font-bold ">
          Estatus: <span className="font-black">{error.status}</span>
        </p>
        <p className="text-2xl text-blue-800 font-bold ">
          Mensaje: <span className="font-black">{error.statusText}</span>
        </p>
        <p className="text-2xl text-blue-800 font-bold ">
          Tipo: <span className="font-black">{error.data}</span>{" "}
        </p>

        <Link
          className="text-lg capitalize p-1 bg-amber-500 rounded-sm hover:tracking-widest hover:bg-amber-400 transition-all text-white font-semibold"
          to="/">
          Ir a inicio
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
    </div>
  );
}

const Guitarra = () => {
  const { agregarCarrito } = useOutletContext();

  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const guitarra = useLoaderData();

  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      setError(true);
      return;
    }

    const guitarraSeleccionada = {
      id: guitarra.data[0].id,
      nombre,
      precio,
      cantidad,
      imagen: imagen.data.attributes.url,
    };
    setError(false);
    // console.log(guitarraSeleccionada)
    agregarCarrito(guitarraSeleccionada);
  };

  return (
    <main className="py-10">
      <h2 className="titulo">Articulo</h2>
      <section className="grid contenedor my-5 lg:mb-10">
        <article className="guitarra flex flex-col gap-3 items-center mx-auto w-5/6 lg:grid lg:grid-cols-2">
          <img
            className="block mx-auto  lg:w-1/2"
            src={imagen.data.attributes.url}
            alt={`guitarra-${nombre}`}
          />
          <section className="flex flex-col gap-4 text-center max-w-lg lg:text-left">
            <h2 className="text-3xl text-amber-500 font-bold">{nombre}</h2>
            <p className="text-2xl font-black">{formatearPrecio(precio)}</p>
            <p className="descripcion">{descripcion}</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 items-center">
              <label className="font-black" htmlFor="option">
                Cantidad
              </label>

              {error && (
                <small className="text-red-600 font-semibold">
                  Asegurese de seleccionar un valor
                </small>
              )}
              <select
                className="text-center border border-black rounded-sm w-3/5"
                id="option"
                onChange={(e) => setCantidad(+e.target.value)}>
                <option value="0">--- Seleccione ---</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
                <input
                  className="bg-slate-800 text-white font-bold w-3/5 p-2 rounded-md hover:transition-all hover:tracking-widest cursor-pointer hover:bg-slate-700"
                  type="submit"
                  value='Agregar al carrito'
                />
            </form>
            <Link className="cta mt-4" to={`/guitarras`}>
              Ver Articulos
            </Link>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Guitarra;
