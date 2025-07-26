import ButtonAction from "../components/buttons/buttonAction";

export default async function Home(){
  return (
    <main className="grid">
      <section className="grid place-items-cente w-[800px] h-[500px] py-6 bg-red-200 border-stone-400 border-2 rounded-[25px]" >
        <header className="flex flex-col align-middle py-4" >
          <h3>insumos para tu bebe</h3>
          <h1>BABY STORE</h1>
          <h2>TODO PARA TU BEBE</h2>
          <div className="flex align-middle items-center justify-center gap-2 font-bold" >
            <ButtonAction>
              ingresar
            </ButtonAction>
            <p className="font-bold text-[12px]" >obtené un -10%</p>
          </div>
        </header>
      </section>
    </main>
  );
}
