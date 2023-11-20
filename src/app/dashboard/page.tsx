
import Dashboard from '@/src/components/Dashboard'
import { db } from '@/src/db'

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation'

const Page = async () => {
  const {getUser}  = getKindeServerSession();
  
 
  const user = getUser()
 
 //important!!! need to get user verified and token confirmed on logged in user

  // if (!user || !user.id) redirect('/auth-callback?origin=dashboard')

  // const dbUser = await db.user.findFirst({
  //   where: {
  //     id: user
  //   }
  // })

  // if(!dbUser) redirect('/auth-callback?origin=dashboard')

  

  return <Dashboard  />
}

export default Page