import ButtonAction from "../components/buttons/buttonAction";

export default async function Home(){
  return (
    <main className="grid">
      <section className="grid place-items-cente w-[1000px] h-[500px] py-6 border-stone-400 border-2 rounded-[25px] bg-[url('../../public/bgk-store.jpg')] bg-no-repeat bg-cover bg-center" >
        <header className="flex flex-col align-middle py-4" >
          <p className="text-[10px]" >Insumos para tu bebe!</p>
          <h1>Baby Store</h1>
          <h2 className="font-montserrat" >TODO PARA TU BEBE</h2>
          <div className="flex align-middle items-center justify-center gap-2 font-bold" >
            <ButtonAction>
              INGRESAR
            </ButtonAction>
            <p className="font-bold text-[10px]" >OBTENÉ UN -10%</p>
          </div>
        </header>
      </section>
    </main>
  );
}
