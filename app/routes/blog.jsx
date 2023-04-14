import React from 'react'
import { getBlog } from '../models/blog.server';
import { useLoaderData } from '@remix-run/react';
import ListaPost from '../components/ListaPost';

export const loader =async()=>{
  const blog =await getBlog();
  return blog.data
}

export const meta = () => {
  return [
    { title: "GuitarLa - Blog" },
    { name: 'description', content:'Encuentra la Mayor Variedad de Guitarras, Amplificadores, Efectos y Accesorios. Marin Import Instrumentos Musicales, Repuestos y Accesorios. Al Mejor Precio.'},
    { name: 'keywords' , content:'articulos,guitarras,musica,intrumentos,acusticas,ofertas,mejores'},
    { name: 'author' , content:'cesar zubilete sanchez'}
  ];
};
const Blog = () => {
  const posts = useLoaderData()
  return (
    <main className='py-10'>
      <h1 className='titulo'>Blog</h1>
      <ListaPost posts={posts}/>
    </main>
  )
}

export default Blog