import { buttonVariants } from "@/components/ui/button"
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import WidthWrapper from "./WidthWrapper"

const Navbar = () => {
    return (
        <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/60 backdrop-blur-lg transition-all">
            <WidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-700">
                    <Link href="/" className="flex z-40 font-semibold">
                        <span>WAC</span>
                      {/*add logo */}
                    </Link>
                    <div className="hidden items-center space-x-4 sm:flex hover:bg-slate-300">
                        {/* // todo -> fix log out link */}
                        
                    {/* <LogoutLink 
                        className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                        })}>
                            Sign out 
                            </LogoutLink> */}
                       
                        <Link href="/price"className={buttonVariants({
                            variant: "ghost",
                            size: "sm"
                        })}>Price
                        </Link>
                        <LoginLink
                        className={buttonVariants({
                            variant: "ghost",
                            size: "sm",
                        })}>
                            Sign in
                        </LoginLink>
                        <RegisterLink
                        className={buttonVariants({
                            
                            size: "sm",
                        })}>
                            Schedule APT<ArrowRight className='ml-3.5 h-4 w-4' />
                        </RegisterLink>
                       
                    </div>
                </div>
            </WidthWrapper>
        </nav>
    )
}

export default Navbar