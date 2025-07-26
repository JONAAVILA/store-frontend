import { ReactNode } from "react"

type ButtonActionType = {
    children: ReactNode
}

export default function ButtonAction({children}:ButtonActionType){
    return(
        <a href="">
            <button className="flex align-middle bg-[var(--action)] p-1 gap-4 rounded-4xl text-[12px] border-2 border-neutral-50 transition hover:bg-[var(--actionHover)]">
                <div className="grid place-items-center pl-2 pb-0.5" >
                  {children}
                </div>
                <svg  
                    xmlns="http://www.w3.org/2000/svg"  
                    width="24"  
                    height="24"  
                    viewBox="0 0 24 24"  
                    fill="none"  
                    stroke="currentColor"  
                    className="bg-neutral-50 rounded-3xl stroke-2 hover:-rotate-360 transition ease-in-out duration-400"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M17 7l-10 10" />
                    <path d="M8 7l9 0l0 9" />
                </svg>
            </button>
        </a>
    )
}