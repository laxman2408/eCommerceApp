import React from 'react'
import Responsive from 'react-responsive-decorator'
import {Route} from 'react-router-dom'
import {Switch} from 'react-router-dom'
import Frontpage from './Frontpage/Frontpage'
import Details from './Secondpage/Details'
// import Details1 from './Secondpage/Details1'
// import Details2 from './Secondpage/Details2'
// import Details3 from './Secondpage/Details3'
import Checkout from './Lastpage/Checkout'
import { CartProvider } from './Lastpage/CheckoutContext'
// import Mainheader from './components/Mainheader'
// import DummyName from './components/DummyName'
// import Product from './components/Product'
function App() {
  return (
  <CartProvider>
    <div className="App">
      <div className="mobile">
       
            
            <main>
                <Switch>
                    <Route exact path="/">
                      <Frontpage />{" "}
                    </Route>
                    <Route  path="/Details/:product_name" component={Details}>
                      <Details />{" "}
                    </Route>
                    {/* <Route  path="/Details1" component={() => <Details1 authorized = {false}/>}>
                      <Details1 />{" "}
                    </Route>
                    <Route  path="/Details2" component={() => <Details2 authorized = {false}/>}>
                      <Details2 />{" "}
                    </Route>
                    <Route  path="/Details3" component={() => <Details3 authorized = {false}/>}>
                      <Details3 />{" "} */}
                    {/* </Route> */}
                    <Route  path="/Checkout" component={Checkout}>
                      
                        <Checkout />{" "}
                                           
                    </Route>
                </Switch>
            </main>
      
      </div>
    </div>
    </CartProvider>
  );
}

export default Responsive(App)

