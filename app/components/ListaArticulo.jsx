import Articulo from "./Articulo";

const ListaArticulo = ({guitarras}) => {
  return (
    <section className="grilla contenedor w-11/12 my-5 lg:mb-10">
      {guitarras.map((guitar) => (
        <Articulo key={`articulo-${guitar.id}`} guitar={guitar} />
      ))}
    </section>
  );
};

export default ListaArticulo;
