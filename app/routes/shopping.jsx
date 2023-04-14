import { useState, useEffect } from "react";
import { formatearPrecio } from "~/utils/helpers";
import { useOutletContext } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import CarritoArticulo from "../components/CarritoArticulo";
import Spinner from "../components/Spinner";

export const meta = () => {
  return [
    { title: "GuitarLa - Shopping" },
    {
      name: "description",
      content:
        "GuitarLa.pe es la primera tienda online especializada en guitarras y audio profesional para Perú",
    },
    {
      name: "keywords",
      content:
        "guitarras electricas,guitarras acusticas,ofertas,mejores instrumentos,shopping, compras,precios",
    },
    { name: "author", content: "cesar zubilete sanchez" },
  ];
};

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const [articulos, setArticulos] = useState(0);
  const { carrito } = useOutletContext();

  // console.log(carrito);

  useEffect(() => {
    const calcularTotal = carrito.reduce(
      (total, articulo) => total + articulo.cantidad * articulo.precio,
      0
    );
    const calcularArticulos = carrito.reduce(
      (total, articulo) => total + articulo.cantidad,
      0
    );
    setTotal(calcularTotal);
    setArticulos(calcularArticulos);
  }, [carrito]);

  return (
    <ClientOnly fallback={<Spinner />}>
      {() => (
        <main className="bag contenedor w-5/6 py-10 ">
          <h1 className="titulo my-8">Carrito de Compras</h1>

          <section className="grid gap-12 max-w-5xl mx-auto lg:grid-cols-2">
            <div>
              <h2 className="font-bold text-3xl text-amber-600 ">Articulos</h2>
              {carrito?.length === 0 ? (
                <p className="font-bold text-slate-900 text-2xl pt-4">
                  Carrito Vacio
                </p>
              ) : (
                carrito?.map((car) => (
                  <CarritoArticulo key={car.id} producto={car} />
                ))
              )}
            </div>

            <aside className="resumen flex flex-col gap-3 bg-slate-200 p-8 max-h-56 rounded-md my-8 max-w-2xl w-full mx-auto">
              <h3 className="font-bold text-slate-900 text-3xl">
                Resumen del Pedido
              </h3>
              <p className="font-semibold text-lg">
                Cantidad de Articulos : {articulos}{" "}
              </p>
              <p className="font-semibold text-lg">
                Total a Pagar : {formatearPrecio(total)}{" "}
              </p>
            </aside>
          </section>
        </main>
      )}
    </ClientOnly>
  );
};

export default Carrito;
