import Header from '../Header/Header'
import { Link } from 'react-router-dom'

import s from './CartItem.module.css'
import { IoChevronBackSharp } from 'react-icons/io5'

const CartEm: React.FC = () => {
  return (
    <>
      <Header />
      <div className={s.cart}>
        <h2 className={s.cartH2}>
          Корзина пустая <span>😕</span>
        </h2>
        <p className={s.p_cartEm}>
          Вероятней всего, вы не заказывали ничего.
          <br />
          Для того, чтобы сделать заказ, перейди на главную страницу.
        </p>
        <div className={s.exit__span}>
          <Link to="/" className={s.button_black}>
            <div className={s.IoBackicon_rod}>
              <div className={s.IoBackicon}>
                <IoChevronBackSharp className={s.icon_cart_Em} />
                <span>Вернуться назад</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartEm
