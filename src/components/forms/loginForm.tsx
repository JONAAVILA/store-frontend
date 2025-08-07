"use client"

export default function LoginForm(){
    return(
        <form action="" className="grid items-center justify-center w-[300px] text-left gap-4 py-10 rounded-3xl border-2 border-[var(--border)]">
            <h3>Que bueno verte!</h3>
            <div className="relative">
                <input
                    className="peer"
                    type="text" 
                    id="email"
                    name="email"
                    required
                />
                <label className="absolute transition ease-in-out duration-300 left-2 top-2 text-[10px] peer-focus:-translate-y-5" htmlFor="email">EMAIL</label>
            </div>
            <div className="relative">
                <input
                    className="peer"
                    type="text" 
                    id="password"
                    name="password"
                    required
                />
                <label className="absolute transition ease-in-out duration-300 left-2 top-2 text-[10px] peer-focus:-translate-y-5" htmlFor="password">PASSWORD</label>
            </div>
            <button>
                INGRESAR
            </button>
        </form>
    )
}