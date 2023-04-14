import { useLoaderData } from 'react-router';
import { getGuitarras } from '../models/guitarras.server';
import { getBlog } from '../models/blog.server';
import { getCurso } from '../models/curso.server';
import ListaPost from '../components/ListaPost';
import ListaArticulo from '../components/ListaArticulo';
import Curso from '../components/Curso';

export const loader =async ()=>{
  // Mas de una consulta
  // const guitarra = await getGuitarras()
  // const blog = await getBlog()

  // Mas de una consulta de manera optimizada
  const [guitarra , blog  , curso] = await Promise.all([
    getGuitarras(),
    getBlog(),
    getCurso()
  ])


  return [guitarra.data ,  blog.data , curso.data]
}

export const meta = () => {
  return [
    { title: "GuitarLa - Inicio" },
    { name: 'description', content:'Encuentra la Mayor Variedad de Guitarras, Amplificadores, Efectos y Accesorios. Marin Import Instrumentos Musicales, Repuestos y Accesorios. Al Mejor Precio.'},
    { name: 'keywords' , content:'guitarras electricas,guitarras acusticas,ofertas,mejores instrumentos'},
    { name: 'author' , content:'cesar zubilete sanchez'}
  ];
};

export default function Index() {

  const  [guitarras , blog , curso]  = useLoaderData()


  return (
    <main className="mx-auto  py-10">
      <h1 className="titulo">GuitarLa - Bienvenido</h1>
        <ListaArticulo guitarras={guitarras}/>
        <Curso curso={curso}/>
        <ListaPost posts={blog}/>
    </main>
  ) 
}
