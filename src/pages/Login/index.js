import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from '../../context'
import { Redirect } from 'react-router-dom'

const loginSchema = yup.object({
  email: yup.string().email('email inválido').required('campo obrigatório'),
  password: yup.string().required('campo obrigatório')
}).required()

export function Login () {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const { signIn, isLogged } = useAuth()

  const onSubmit = async data => {
    await signIn(data)
    reset()
  }

  if (isLogged) {
    return <Redirect to="/"/>
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email')}/>
            <p>{errors.email?.message}</p>

            <input {...register('password')}/>
            <p>{errors.password?.message}</p>

            <button>{isSubmitting ? 'Carregando...' : 'Entrar'}</button>
        </form>
  )
}
