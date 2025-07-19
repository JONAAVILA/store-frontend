import { getProductos } from "@/adapter/helpers/getProductos";

export default async function Home(){

  const data = await getProductos();
  console.log(data.data[0]);
  const { cover, name } = data.data[0];

  return (
    <main className="grid place-items-center h-screen">
      <section>
        <header>
          <h1>Welcome to Our Store</h1>
          <img src={cover} alt={name} className="grid w-100 h-100" />
        </header>
      </section>
    </main>
  );
}
