import { getServerSession } from 'next-auth'
import PrivateNavigation from '@/components/navigation/private-navigation'
import PublicNavigation from '@/components/navigation/public-navigation'
const Navigation = async () => {
  const session = await getServerSession()
  if (!session) {
    return <PublicNavigation />
  }

  return <PrivateNavigation />
}

export default Navigation
