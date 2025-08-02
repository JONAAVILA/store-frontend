"use client"

export default function LoginForm(){
    return(
        <form action="" className="grid items-center w-[300px] text-left">
            <label htmlFor="email">EMAIL</label>
            <input
                type="text" 
                id="email"
                name="email"
                required
            />
            <label htmlFor="password">PASSWORD</label>
            <input
                type="text" 
                id="password"
                name="password"
                required
            />
            <button>
                INGRESAR
            </button>
        </form>
    )
}