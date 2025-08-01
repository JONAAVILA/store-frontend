import Link from "next/link";
import ButtonAction from "./buttons/buttonAction";

export default function Navbar(){
    return(
        <aside className="flex items-center justify-between w-[1000px] gap-1 pb-2 mb-2">
            <div className="flex items-center justify-center w-[790px] gap-3 text-[10px] p-2 border-2 rounded-3xl border-gray-400 dark:text-[var(--primary)] dark:border-[var(--primary)]" >
                <Link href={"/"}>HOME</Link>
                <Link href={"/contacto"}>CONTACTO</Link>
                <Link href={"/nosotros"}>NOSOTROS</Link>
            </div>
            <Link href={"/auth"}>
                <ButtonAction>
                    INGRESAR / REGISTRARSE
                </ButtonAction>
            </Link>
        </aside>
    )
}