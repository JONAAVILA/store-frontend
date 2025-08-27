import { archivoBlack } from "@/src/app/layout";
import ButtonGoogle from "../buttons/buttonGoogle";
import ButtonAction from "../buttons/buttonAction";

export default function SigninForm(){
    return(
        <form action="" className="grid items-start justify-center w-[450px] border-2 rounded-3xl border-[var(--border)] p-4 bg-[url('../../public/hears-bears.png')] bg-no-repeat bg-bottom bg-contain">
            <div className="grid items-start justify-center w-[400px] gap-8 py-10 px-4">
                <div>
                    <p>REGISTRARSE</p>
                    <h1 className={`${archivoBlack.className} bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] bg-clip-text text-transparent`}>¿nuevo por acá?</h1>
                </div>
                <div className="grid gap-4">
                    <div className="relative">
                        <input
                            className="peer"
                            type="text" 
                            id="email"
                            name="email"
                            autoComplete="off"
                            required
                        />
                        <label 
                            className="absolute transition ease-in-out duration-300 left-18 top-[13px] text-[10px] peer-focus:-translate-y-7" htmlFor="email"
                        >
                            EMAIL
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            className="peer"
                            type="text" 
                            id="password"
                            name="password"
                            autoComplete="off"
                            required
                        />
                        <label 
                            className="absolute transition ease-in-out duration-300 left-18 top-[13px] text-[10px] peer-focus:-translate-y-7" htmlFor="password"
                        >
                            PASSWORD
                        </label>
                    </div>
                </div>
                <div className="grid place-items-center">
                    <ButtonGoogle/>
                </div>
                <div className="grid place-items-center">
                    <ButtonAction color={true}>
                        REGRISTRARSE
                    </ButtonAction>
                </div>
            </div>
        </form>
    )
}