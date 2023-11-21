
import Dashboard from '@/src/components/Dashboard'
import { db } from '@/src/db'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation'

const Page = async () => {
  const {getUser}  = getKindeServerSession();
  const user =  await getUser()
 

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')
const dbUser = await db.user.findFirst({
  where: {
    id: user.id
  }
})


  if(!dbUser) {
    await db.user.create({
      data: user.id,
      email: user.email,
    
    })
  }
  

  return (
  <p className="text-2xl mb-2">Welcome, {user?.email}<Dashboard  /> </p>
  )
}

export default Page