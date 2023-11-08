import { useRouter, useSearchParams } from "next/navigation"


const Page = async () => {
 const router = useRouter()
  
 const searchParams = useSearchParams()
 const origin = searchParams.get('origin')

 const apiResponse = await fetch('/api/myroute')


 const data: { name: string } = await apiResponse.json()

}

export default Page