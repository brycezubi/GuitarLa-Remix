import imagen from "../../public/img/nosotros.jpg";

export const meta = () => {
  return [
    { title: "GuitarLa - Nosotros" },
    {
      name: "description",
      content:
        "GuitarLa.pe es la primera tienda online especializada en guitarras y audio profesional para Perú",
    },
    {
      name: "keywords",
      content:
        "guitarras electricas,guitarras acusticas,ofertas,mejores instrumentos",
    },
    { name: "author", content: "cesar zubilete sanchez" },
  ];
};

export const links = () => [{ rel: "preload", href: imagen, as: "image" }];

const Nosotros = () => {

  
  return (
    <main className="py-10">
      <article className="contenedor w-11/12 mx-auto ">
        <h1 className="titulo">Nosotros </h1>
        <img
          className="block w-full max-w-2xl mx-auto rounded-sm pb-4 lg:pb-8" 
          src={imagen} alt="ilustracion de referencia sobre nosotros" />
        <section className="mx-auto max-w-3xl" >
          <p>
            GuitarLa.pe es la primera tienda online especializada en
            instrumentos musicales y audio profesional para Perú. Descubre todo
            tipo de instrumentos musicales exclusivos en un solo lugar. Nos
            caracterizamos por ofrecer a nuestros usuarios las marcas más
            prestigiosas de la industria musical, y mantener un excelente
            estándar de atención y calidad de servicio.
          </p>

          <p className="my-5">
            Contamos con el mejor equipo de especialistas en cuanto a música se
            refiere, los cuales tienen como misión ofrecer la mejor
            recomendación y asesoría personalizada para nuestros clientes.
          </p>
        </section>
      </article>
    </main>
  );
};

export default Nosotros;
