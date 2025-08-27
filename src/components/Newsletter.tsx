import { archivoBlack } from "../app/layout";
import ButtonAction from "./buttons/buttonAction";

export function Newsaletter() {
    return(
        <section>
            <div className="grid items-center justify-end w-[1000px] bg-[url('../../public/bear-news.png')] bg-no-repeat bg-contain border-2 rounded-3xl border-[var(--border)] py-4">
                <div className="grid justify-start text-start w-[500px]">
                    <h1 className={`${archivoBlack.className} bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] bg-clip-text text-transparent`}>newsletters</h1>
                    <h2>MANTENETÉ AL TANTO DE LAS OFERTAS O NUEVOS ARRIBOS</h2>
                    <div className="flex items-center">
                        <input type="text" />
                        <ButtonAction color={true}>
                            SUSCRIBIRSE
                        </ButtonAction>
                    </div>
                </div>
            </div>
        </section>
    )
}