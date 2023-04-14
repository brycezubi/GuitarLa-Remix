import { Link } from "@remix-run/react";
import { formatearFecha } from '~/utils/helpers'

const Post = ({ post }) => {
  const { titulo, contenido, url, createdAt, image } = post.attributes;
  return (
    <article className="blog flex flex-col gap-8 items-center   mx-auto w-5/6 lg:w-full">
      <img
        className="block mx-auto rounded-sm"
        src={image.data.attributes.formats.medium.url}
        alt="post ilustration"
      />
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl text-amber-500 font-semibold">{titulo}</h2>
        <p className="font-black">{formatearFecha(createdAt)}</p>
        <p className="descripcion">{contenido}</p>
        <Link 
          to={`/blog/post/${url}`}
          className="cta"
          >Leer más</Link>
      </section>
    </article>
  );
};

export default Post;
