import Link from "next/link";
import ButtonAction from "./buttons/buttonAction";
import Instagram from "./buttons/Instagram";
import Meta from "./buttons/meta";
import Store from "./buttons/store";

export default function Navbar(){
    return(
        <aside className="flex items-center justify-between w-[1000px] gap-1 pb-2 mb-2">
            <div className="flex items-center justify-between w-[745px] text-[10px] p-1 border-2 rounded-3xl border-gray-400 bg-[var(--layer)] dark:text-[var(--primary)] dark:border-[var(--primary)]"
            >
                <div className="flex items-center justify-start gap-5">
                    <Link href={"/"}>
                    <img src="/favicon.ico" alt="" className="aspect-square bg-[var(--layer)] hover:bg-[var(--action)] transition duration-500 w-9 rounded-3xl object-contain" />
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
                <div className="flex items-center gap-6 pr-3">
                    <Instagram/>
                    <Meta/>
                </div>
            </div>
            <div className="flex items-center justify-center gap-1 text-[10px] p-1 border-2 rounded-3xl border-gray-400 bg-[var(--layer)] dark:text-[var(--primary)] dark:border-[var(--primary)]"
            >
                <Store/>
                <Link href={"/auth"}>
                    <ButtonAction>
                        INGRESAR / REGISTRARSE
                    </ButtonAction>
                </Link>

            </div>
        </aside>
    )
}