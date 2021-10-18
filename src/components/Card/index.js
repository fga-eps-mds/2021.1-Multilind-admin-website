import classNames from 'classnames'
import './styles.scss'

export function Card ({ children, className: customClass }) {
  return (
        <div className={classNames('card', customClass)}>
            {children}
        </div>
  )
}
