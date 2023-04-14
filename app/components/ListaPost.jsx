import Post from "./Post"

const ListaPost = ({posts}) => {
  return (
    <section className='grilla contenedor w-5/6 my-5 lg:mb-10'>
      {
        posts.map( post=>(
          <Post key={post.id} post={post}/>
        ))
      }
      </section>
  )
}

export default ListaPost