/* eslint-disable react/prop-types */
import { posts } from "./posts";

function App() {
  return (
    <>
      <header>
        <h1 id="titulo">BLOG DE PRUEBA</h1>
      </header>
      <section className="container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
      <footer>
        <section>
          <a href="#titulo">ir al titulo</a>
          <a href="mailto:jhontmg26@gmail.com">Correo de contacto</a>
        </section>

        <p>Copyright 2022</p>
      </footer>
    </>
  );
}

export default App;
function Post({ post }) {
  const { title, subtitle, image, description } = post;

  return (
    <article className="post">
      <h2 className="post-title">{title} </h2>
      <p className="post-description">{subtitle}</p>
      <img className="post-imagen" src={image} alt="" />
      <p className="Post-Description-Larga">{description}</p>
    </article>
  );
}
