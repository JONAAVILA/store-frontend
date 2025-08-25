import Link from "next/link";
import ButtonAction from "../components/buttons/buttonAction";
import { archivoBlack } from "./layout";
import { Newsaletter } from "../components/Newsletter";

export default async function Home(){
  return (
    <main className="grid gap-4">
      <section className="grid place-items-cente justify-center w-[1000px] h-[500px] py-6 border-[var(--border)] border-2 rounded-[25px] bg-[url('../../public/bgk-store.jpg')] bg-no-repeat bg-cover bg-center dark:border-[var(--primary)]" >
        <header className="flex flex-col items-center w-[380px]" >
          <p className="px-2 py-1 border-[var(--primary)] border-1 rounded-3xl w-fit">¡Insumos y accesorios para tu bebe!</p>
          <h1 className={`${archivoBlack.className} grid text-center mt-3`} >
            <span className="flex items-center justify-center gap-1">
              <span 
                className="flex text-center items-center pb-1 -mb-1 gap-1 bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] bg-clip-text text-transparent"
              >
                baby
                <img 
                  src="/bear.png" 
                  className="h-12" 
                  alt="" 
                />
              </span>
              store
            </span>
            indumentaria, accesorios e <br/> insumos
          </h1>
          <h2>TODO PARA TU BEBE</h2>
          <div className="flex align-middle items-center justify-center gap-2 font-bold" >
            <Link href={"/auth"}>
              <ButtonAction>
                INGRESAR
              </ButtonAction>
            </Link>
            <p className="font-bold text-[10px]" >OBTENÉ UN -10%</p>
          </div>
        </header>
      </section>
      <Newsaletter/>
    </main>
  );
}
