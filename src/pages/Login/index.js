import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useAuth } from '../../context'
import { Redirect } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Card } from '../../components'
import './styles.scss'

const loginSchema = yup
  .object({
    email: yup.string().email('email inválido').required('campo obrigatório'),
    password: yup.string().required('campo obrigatório')
  })
  .required()

export function Login () {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const { signIn, isLogged } = useAuth()

  const onSubmit = async (data) => {
    await signIn(data)
    reset()
  }

  if (isLogged) {
    return <Redirect to="/" />
  }

  const renderCardHeader = () => (
    <>
      <img src={logo} alt="logo" />
      <h2>Portal do Admin</h2>
    </>
  )

  const renderInputForm = () => (
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label>Email: </label>
        <input {...register('email')} />
        <p className="error">{errors.email?.message}</p>
      </div>

      <div className="field">
        <label>Senha: </label>
        <input {...register('password')} type="password"/>
        <p className="error">{errors.password?.message}</p>
      </div>
      <button className="button-primary">{isSubmitting ? 'Carregando...' : 'Entrar'}</button>
    </form>
  )

  return (
    <div className="login-container">
      <Card className="login-card">
        {renderCardHeader()}
        {renderInputForm()}
      </Card>
    </div>
  )
}
