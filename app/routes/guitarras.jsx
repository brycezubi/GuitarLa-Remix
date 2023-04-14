import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import ListaArticulo from "../components/ListaArticulo";

export const loader =async()=>{
  const guitarras = await getGuitarras();
  return guitarras.data
}

export const meta = () => {
  return [
    { title: "GuitarLa - Tienda" },
    { name: 'description', content:'Encuentra la Mayor Variedad de Guitarras, Amplificadores, Efectos y Accesorios. Marin Import Instrumentos Musicales, Repuestos y Accesorios. Al Mejor Precio.'},
    { name: 'keywords' , content:'guitarras electricas,guitarras acusticas,ofertas,mejores instrumentos'},
    { name: 'author' , content:'cesar zubilete sanchez'}
  ];
};

const Guitarras = () => {
  const guitarras = useLoaderData();
  
  return (
    <main className="py-10">
      <h2 className="titulo">Tienda</h2>
      <ListaArticulo guitarras={guitarras}/>
    </main>
  )
}

export default Guitarras