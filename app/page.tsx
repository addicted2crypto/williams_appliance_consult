import Image from 'app/appliance_logo.png'
import WidthWrapper from './components/WidthWrapper'

export default function Home() {
  return (
    <WidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-400 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-500 hover:bg-white/25">
        <p className='text-sm font-semibold text-gray-900'>
          William's Applicance Consult is now live!
        </p>


      </div>
    </WidthWrapper>
      
    
  )
}
