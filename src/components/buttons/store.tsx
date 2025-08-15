export default function Store(){
    return(
        <a className="grid place-items-center border-2 border-[var(--white)] bg-[var(--action)] rounded-3xl p-1" href="">
            <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="22"  
                height="22"  
                viewBox="0 0 24 24"  
                fill="none"  
                className="stroke-2 stroke-[var(--secundary)]" 
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M9 8a3 3 0 0 0 6 0" />
            </svg> 
        </a>
    )
}