import ButtonAction from "../components/buttons/buttonAction";
import { lilita } from "./layout";

export default async function Home(){
  return (
    <main className="grid">
      <section className="grid place-items-cente w-[1000px] h-[500px] py-6 border-stone-400 border-2 rounded-[25px] bg-[url('../../public/bgk-store.jpg')] bg-no-repeat bg-cover bg-center dark:border-[var(--primary)]" >
        <header className="flex flex-col items-center py-4" >
          <p className="px-2 py-1 border-[var(--secundary)] border-1 rounded-3xl text-[10px] w-fit" >Insumos y accesorios para tu bebe! 👶</p>
          <h1 className={lilita.className} >BABY STORE</h1>
          <h2>TODO PARA EL CUIDADO DE TU BEBE</h2>
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
