export default function ButtonGoogle (){
    return(
        <a href="" className="flex items-start justify-center gap-2 border-2 rounded-3xl border-[var(--border)] w-[140px] p-1">
            INGRESAR CON <br/> GOOGLE
            <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="32"  
                height="32"  
                viewBox="0 0 24 24"  
                fill="none"  
                stroke="currentColor"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
            </svg>  
        </a>
    )
}