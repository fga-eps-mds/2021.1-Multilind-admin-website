import Fuse from 'fuse.js'
import SelectSearch from 'react-select-search'
import { Card } from '../../components'
import './styles.scss'
import './stylesEth.scss'

export function EthnicityLanguage () {
  return (
    <div className="container">
      <Card className="card">
        <form className="form">
          <h2 className="Header-screen">Cadastro Língua</h2>
          <div className="input-language-fields select-go">
            <label className="label-class-language">{'Etnia(s) que falam'}</label>
            <SelectSearch
              multiple
              options={
                [
                  { name: 'cat 1', value: 'opt1' },
                  { name: 'dog 2', value: 'opt2' },
                  { name: 'forro 3', value: 'opt3' },
                  { name: 'boys 5', value: 'opt4' },
                  { name: 'trap 6', value: 'opt5' },
                  { name: 'star 7', value: 'opt6' },
                  { name: 'option 8', value: 'opt7' },
                  { name: 'option 9', value: 'opt8' },
                  { name: 'option 10', value: 'opt9' },
                  { name: 'option 11', value: 'opt10' },
                  { name: 'option 12', value: 'opt11' },
                  { name: 'option 13', value: 'opt12' },
                  { name: 'option 14', value: 'opt13' },
                  { name: 'option 15', value: 'opt14' },
                  { name: 'option 16', value: 'opt15' }
                ]
              }
              search
              closeOnSelect
              filterOptions={
                (options) => {
                  const fuse = new Fuse(options, {
                    keys: ['name', 'groupName', 'items.name'],
                    threshold: 0.3
                  })
                  return (value) => {
                    if (!value.length) {
                      return options
                    }
                    return fuse.search(value)
                  }
                }
              }
              printOptions="on-focus"
              className="select-search"
            />
          </div>
          <button className="button-next-page button-primary button-go">{'Salvar'}</button>
        </form>
      </Card>
    </div>
  )
}
