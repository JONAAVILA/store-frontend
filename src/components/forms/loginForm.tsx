"use client"

export default function LoginForm(){
    return(
        <form action="" className="grid items-center w-[300px] text-left gap-4">
            <h1>ingresar</h1>
            <div className="relative">
                <input
                    className="peer"
                    type="text" 
                    id="email"
                    name="email"
                    required
                />
                <label className="absolute transition ease-in-out duration-300 left-2 top-2 text-[10px] peer-focus:-translate-y-6" htmlFor="email">EMAIL</label>
            </div>
            <div className="relative">
                <input
                    className="peer"
                    type="text" 
                    id="password"
                    name="password"
                    required
                />
                <label className="absolute transition ease-in-out duration-300 left-2 top-2 text-[10px] peer-focus:-translate-y-6" htmlFor="password">PASSWORD</label>
            </div>
            <button>
                INGRESAR
            </button>
        </form>
    )
}