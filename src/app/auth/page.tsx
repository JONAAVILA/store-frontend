import LoginForm from "@/src/components/forms/loginForm";
import SigninForm from "@/src/components/forms/signinForm";

export default function Outh(){
    return(
        <section className="flex pt-1 gap-[50px] items-start justify-center">
            <LoginForm/>
            <SigninForm/>
        </section>
    )
}