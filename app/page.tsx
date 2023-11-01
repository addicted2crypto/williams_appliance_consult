
import Link from 'next/link'
import WidthWrapper from './components/WidthWrapper'
import { ArrowRight } from "lucide-react"
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <>

   <WidthWrapper className="mb-12 mt-28 sm:mt-40 bg-slate-100 flex flex-col items-center justify-center text-center">

    
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-400 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-800 hover:bg-white/30">
        <p className='text-sm font-semibold text-gray-900'>
          William's Appliance Consult is now live!
        </p>
      </div>
      <h1 className='max-w-6xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        Schedule your consult<span className='text-red-700'> before wasting <span className="text-green-600"> $$$$ </span></span> on a in person diagnostic.
      </h1>
      <p className='mt-6 max-w-pros text-zinc-800 sm:text-lg'>
        William's Consult app allows you to upload pictures as PDF documents. 
        The app also allows for forms and text input to articulate all the issues 
        with your appliance. This info is crucial so I can properly daignose your machine, and save you time and money!
      </p>
      <p className='mt-4 max-w-pros text-zinc-600 sm:text-lg'>
        Is your Appliance acting up? Did it abruptly stop working? Do you see a error code? Do you have a warranty on it? Schedule a consult and we 
        will go over what is feasable. 
      </p>
      <Link className={buttonVariants({
        size: 'lg',
        className: 'mt-14'
        
      })}href='/dashboard' target='_blank'>
        Schedule Apt <ArrowRight className='ml-2 h-5 w-5'/>
      </Link>
    </WidthWrapper>
      {/* value proposition section */}                                                                                             
      <div>
        <div className='relative isolate' >
          <div aria-hidden="true"className='pointer-events-none absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div style={{
              clipPath:"(polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-33rem)] sm:w-[72.187rem]' />

          </div>
            <div>
              <div className='mx-auto max-w-6xl px-6 lg:px-8'>
                <div className='mt-16 floow-root sm:mt-24'>
                  <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                    <Image 
                    src='/appliance_logo.png'
                    alt='WAC logo'
                    width={2000}
                    height={1500}
                    quality={100}
                    />

                  </div>
                  </div>
              </div>
            </div>

        </div>
      </div>
    </>
      
    
  )
}
