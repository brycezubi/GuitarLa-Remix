import React from "react";

const Curso = ({ curso }) => {
  const { titulo, contenido , image } = curso.attributes;
  // console.log(image.data[0].attributes.url)
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.7)
        ),
        url(${image.data[0].attributes.url});`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
          
      }}
      className="curso  bg-red-500 grid place-content-center my-20 ">
      <div className="text-center text-white w-11/12 mx-auto">
        <h2 className="font-semibold text-4xl lg:text-5xl pb-2 lg:pb-6">{titulo}</h2>
        <small className="text-base text-red-500">{contenido}</small>
      </div>
    </section>
  );
};

export default Curso;
