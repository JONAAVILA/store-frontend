import { archivoBlack } from "@/src/app/layout"
import ButtonAction from "../buttons/buttonAction"

export default function LoginForm(){
    return(
        <form action="" className="grid items-start justify-center w-[500px]">
            <div className="grid items-start justify-center w-[400px] gap-8 py-13 px-4">
                <div>
                    <p>INGRESAR</p>
                    <h1 className={archivoBlack.className}>¡que bueno verte de nuevo!</h1>
                </div>
                <div className="grid justify-center gap-4">
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
                            className="absolute transition ease-in-out duration-300 left-4 top-[13px] text-[10px] peer-focus:-translate-y-7" 
                            htmlFor="email"
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
                            className="absolute transition ease-in-out duration-300 left-4 top-[13px] text-[10px] peer-focus:-translate-y-7" 
                            htmlFor="password"
                        >
                            PASSWORD
                        </label>
                    </div>
                </div>
                <div className="grid justify-center">
                    <ButtonAction color={false}>
                        INGRESAR
                    </ButtonAction>
                </div>
            </div>
        </form>
    )
}