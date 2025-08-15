import Link from "next/link";
import ButtonAction from "./buttons/buttonAction";

export default function Navbar(){
    return(
        <aside className="flex items-center justify-between w-[1000px] gap-1 pb-2 mb-2">
            <div className="flex items-center justify-start w-[790px] gap-5 text-[10px] p-1 border-2 rounded-3xl border-gray-400 bg-[var(--layer)] dark:text-[var(--primary)] dark:border-[var(--primary)]"
            >
                <Link href={"/"}>
                  <img src="/favicon.png" alt="" className="bg-[var(--white)] hover:bg-[var(--actionHoverButton)] transition duration-500 w-9 border-2 rounded-3xl border-[var(--white)] object-contain" />
                </Link>
                <Link 
                    className="hover:text-[var(--actionHoverButton)] transition duration-500" 
                    href={"/contacto"}
                >
                    CONTACTO
                </Link>
                <Link 
                    className="hover:text-[var(--actionHoverButton)] transition duration-500" 
                    href={"/nosotros"}
                >
                    NOSOTROS
                </Link>
            </div>
            <div className="flex items-center justify-center w-[210px] gap-3 text-[10px] p-1 border-2 rounded-3xl border-gray-400 bg-[var(--layer)] dark:text-[var(--primary)] dark:border-[var(--primary)]"
            >
                <Link href={"/auth"}>
                    <ButtonAction>
                        INGRESAR / REGISTRARSE
                    </ButtonAction>
                </Link>

            </div>
        </aside>
    )
}