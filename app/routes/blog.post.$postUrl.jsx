import { formatearFecha } from "~/utils/helpers";
import { getBlogUrl } from "../models/blog.server";
import {
  Link,
  useLoaderData,
  useRouteError,
  isRouteErrorResponse,
} from "@remix-run/react";

export const loader = async ({ params }) => {
  const { postUrl } = params;
  const post = await getBlogUrl(postUrl);

  if (post.data.length === 0) {
    throw new Response("Error al Buscar el Post", {
      status: 404,
      statusText: "Entrada no Encontrada",
    });
  }
  return post;
};

export const meta = ({ data }) => {
  if (!data) {
    return [{ title: "GuitarLa -Blog no encontrado" }];
  }
  return [
    { title: `GuitarLa - ${data.data[0].attributes.titulo}` },
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

const Blog = () => {
  const post = useLoaderData();

  const { image, titulo, contenido, createdAt } = post.data[0].attributes;

  return (
    <main className="py-10">
      <h1 className="titulo pb-4">Blog</h1>
      <section className="grid contenedor my-5 lg:mb-10">
        <article className="blog flex flex-col gap-8 items-center mx-auto w-5/6 lg:w-full lg:grid lg:grid-cols-2 lg:gap-10">
          <img
            className="block mx-auto rounded-sm"
            src={image.data.attributes.formats.medium.url}
            alt="post ilustration"
          />
          <section className="flex flex-col gap-4 max-w-3xl mx-auto lg:col-start-2">
            <h2 className="text-2xl text-amber-500 font-semibold">{titulo}</h2>
            <p className="font-black">{formatearFecha(createdAt)}</p>
            <p className="descripcion">{contenido}</p>
            <Link to={`/blog`} className="cta mt-8 capitalize">
              ir a blog
            </Link>
          </section>
        </article>
      </section>
    </main>
  );
};

export default Blog;
