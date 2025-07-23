import { getProductos } from "@/adapter/helpers/getProductos";

export default async function Home(){

  const {image,title} = await getProductos();

  return (
    <main className="grid place-items-center h-screen">
      <section>
        <header>
          <h1>{title}</h1>
          <img src={image} alt="" className="grid w-100 h-100" />
        </header>
      </section>
    </main>
  );
}
