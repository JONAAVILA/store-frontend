import ButtonAction from "./buttons/buttonAction";

export default function Navbar(){
    return(
        <aside className="flex items-center justify-between w-[1000px] gap-1 pb-2 mb-2">
            <div className="flex items-center justify-center w-[820px] gap-3 text-[10px] p-2 border-2 rounded-3xl border-gray-400" >
                <a href="">HOME</a>
                <a href="">NOSOTROS</a>
                <a href="">CONTACTO</a>
            </div>
            <div>
                <ButtonAction>
                    INGRESAR / REGISTRARSE
                </ButtonAction>
            </div>
        </aside>
    )
}