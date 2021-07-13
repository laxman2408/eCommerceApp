import React from 'react'
import {RiShoppingCartFill} from 'react-icons/ri'
import {Link,Switch} from 'react-router-dom'

function CartButton() {
    return (
        <div>
            <Switch>
                <Link to="/Checkout"><div style = {{float:'right',cursor:'pointer'}}><RiShoppingCartFill className="carticon" /></div>                  
                </Link>
              </Switch> 
        </div>
    )
}

export default CartButton;
