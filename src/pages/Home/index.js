import { useAuth } from '../../context'

export function Home () {
  const { user } = useAuth()
  return <h1>{user.name}</h1>
}
