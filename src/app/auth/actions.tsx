"use server"

import { cookies } from "next/headers"

export default async function LoginAction(formData:FormData){
    
    const email = formData.get('email')
    const password = formData.get('password')

    const res = await fetch("http://localhost:1337/api/auth/local",{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            identifier:email,
            password
        })
    })

    if(!res.ok){
        const errorData = await res.json()
        return {
            success:false,
            error:errorData?.error?.message || 'Contraseña o email incorrectos'
        }
    }

    const { jwt,user } = await res.json()

    ;(await cookies()).set("jwt",jwt,{
        httpOnly:true,
        secure:process.env.NODE_ENV === "production",
        sameSite:"lax",
        maxAge:60*60*60,
        path:"/"
    })

    return{
        success:true,
        user
    }
}