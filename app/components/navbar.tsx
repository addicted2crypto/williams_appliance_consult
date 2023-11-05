import { buttonVariants } from "@/components/ui/button"
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
                        <Link href="/price"className={buttonVariants({
                            variant: "ghost",
                            size: "sm"
                        })}>Price</Link>

                    </div>
                </div>
            </WidthWrapper>
        </nav>
    )
}

export default Navbar