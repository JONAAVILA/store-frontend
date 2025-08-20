import ButtonAction from "./buttons/buttonAction";

export function Newsaletter() {
    return(
        <section>
            <div className="grid items-center justify-end w-[1000px] border-2 rounded-3xl border-[var(--border)] py-4">
                <h1>newsletters</h1>
                <h2>MANTENETÉ AL TANTO DE LAS OFERTAS O NUEVOS ARRIBOS</h2>
                <ButtonAction>
                    suscribirse
                </ButtonAction>
            </div>
        </section>
    )
}