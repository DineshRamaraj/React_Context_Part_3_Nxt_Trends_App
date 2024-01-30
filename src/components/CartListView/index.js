import CartItem from '../CartItem'

import './index.css'
import CartContext from '../../Context/CartContext'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, deleteCartItem} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem
              key={eachCartItem.id}
              cartItemDetails={eachCartItem}
              deleteCartItem={deleteCartItem}
            />
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
