import {Link,Switch} from 'react-router-dom'
import {RiShoppingCartFill} from 'react-icons/ri'
import {FaStream} from 'react-icons/fa'
const Mainheader = () => {
  


    return (
      <header>
        <nav  className="navigation">
          <ul className="ul">
            <li className="option">
              <FaStream />
            </li>
            <li className="cart">
              <Switch>
                <Link to="/Checkout"><button style = {{backgroundColor:'transparent',border:'none'}}><RiShoppingCartFill className="addcart"  /></button>
                  
                </Link>
              </Switch>
            </li>
          </ul>
        </nav>
      </header>
    );
}
export default Mainheader