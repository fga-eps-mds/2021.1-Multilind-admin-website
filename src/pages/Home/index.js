import { useAuth } from '../../context'

export function Home () {
  const { user } = useAuth()
  return <h1>Bem vindo, {user.name}!</h1>
}
