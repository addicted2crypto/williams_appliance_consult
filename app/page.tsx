
import WidthWrapper from './components/WidthWrapper'

export default function Home() {
  return (
    
   <WidthWrapper className="mb-12 mt-28 sm:mt-40 bg-slate-100 flex flex-col items-center justify-center text-center">
    
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-400 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-500 hover:bg-white/25">
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
    </WidthWrapper>
      
    
  )
}
