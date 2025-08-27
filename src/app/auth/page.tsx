import LoginForm from "@/src/components/forms/loginForm";
import SigninForm from "@/src/components/forms/signinForm";

export default function Outh(){
    return(
        <section className="relative flex pt-1 gap-[50px] items-start justify-center">
            <img className="absolute -z-1 left-0 top-[50%] -translate-y-[40%] w-[300px]" src="/bear-left.svg" alt="" />
            <LoginForm/>
            <SigninForm/>
        </section>
    )
}