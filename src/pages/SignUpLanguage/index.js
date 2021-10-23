import { Card } from '../../components'
import { useLanguage } from '../../context'
import './styles.scss'

export function SignUpLanguage () {
  const { languages } = useLanguage()

  useEffect(() => {
    const response = async () => {
      const data = await ContentLanguageService.getAllLanguages()
      setlang(data)
    }
    response()
  }, [])
  console.log(lang)
  return (
    <div className="container">
      <Card className="card">
        <form className="form">
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="input-language-fields">
            <label className="label-class-language">Nome da Língua</label>
            <input className="input-language-screen" placeholder="Guajá"></input>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Localidade(s) da língua</label>
            <input className="input-language-screen" placeholder="-2.43274, -46.71387"></input>
            <label className="obs-localidade">
              O valor deve ser informado em coordenadas e possuir fomato [latitude],
            [longintude]
            </label>
          </div>
          <div className="input-language-fields">
            <label className="label-class-language">Família Linguística</label>
            <input className="input-language-screen"></input>
          </div>
          <button className="button-next-page button-primary">{'Próxima'}</button>
        </form>
      </Card>
    </div>
  )
}
