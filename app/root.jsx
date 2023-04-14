import { useEffect, useState } from "react";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/global.css";
import tailwind from "./styles/tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
  },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: tailwind },
];

export default function App() {
  const carritoLs =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : null;
  const [carrito, setCarrito] = useState(carritoLs);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarCarrito = (articulo) => {
    // console.log('Enviando un articulo', articulo)

    if (carrito.some((art) => art.id === articulo.id)) {
      // console.log('articulo repetido')
      // Iterar sobre el arreglo e identificar el elemento duplicado
      const carritoActualizado = carrito.map((car) => {
        if (car.id === articulo.id) {
          // Reescribir la cantidad
          car.cantidad = articulo.cantidad;
        }
        return car;
      });
      // Añadir al carrito
      setCarrito(carritoActualizado);
    } else {
      // console.log('articulo agregado')
      // Registro nuevo , agregar al carrito
      setCarrito([...carrito, articulo]);
    }
  };

  const actualizarCantidad = (articulo) => {
    const carritoActualizado = carrito.map((car) => {
      if (car.id === articulo.id) {
        car.cantidad = articulo.cantidad;
      }
      return car;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarArticulo = (id) => {
    // console.log('Eliminando' , id)
    const nuevoArticulo = carrito.filter((car) => car.id !== id);
    setCarrito(nuevoArticulo);
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: `'Open Sans',san-serif` }}>
        <Header />
        <Outlet
          context={{
            carrito,
            agregarCarrito,
            actualizarCantidad,
            eliminarArticulo,
          }}
        />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
