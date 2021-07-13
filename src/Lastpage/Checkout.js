// import React,{useState} from 'react'
// import { Link} from 'react-router-dom';
// //ort Products from "./Products"

// const MainContent = () => {
    
//     const Products = () => [
//         {
//             id:'1',
//             product_name : 'Boat Headphones 690hz',
//             price: '$ 123.00',
//             img:'./images/Boat.png'
//         },
//         {
//             id:'2',
//             product_name : 'Boat Bass 900',
//             price: '$ 1230.00',
//             img:'./images/Boat.png'
//         }
//         ,{
//             id:'3',
//             product_name : 'Boat bass 250',
//             price: '$230.00',
//             img:'./images/Boat.png'
//         },{
//             id:'4',
//             product_name:'Boat headphone 550',
//             price:'$ 420.00',
//             img:'./images/Boat.png'
//         }
//     ]
//     const [data] = useState(Products);
    
//     return (
//       <div className="main_content">
//         {data.map((item) => {
//             return(
//                 <div className="a123" >
//             <Link  to = {`/Details/${item.product_name}`} >
//                 <div className="card_img">
//                     <img src={item.img} alt="boat headphones" />
//                 </div>
//                 <div className="items_amount">
//                     <h2>{item.product_name}</h2>
//                     <p>{item.price}</p>
//                 </div>
//             </Link>
//             </div>
//             )
            
                   
//         })}
//       </div>
//     );
// }
// export default MainContent;


import React,{useContext} from 'react'
import {FaArrowLeft} from 'react-icons/fa';
import {Link,Switch} from 'react-router-dom'
import CartContext from './CartContext';

function Checkout(props) {

    const cartCttx = useContext(CartContext);

    const cartItemRemoveHandler = (id) => {
        cartCttx.removeItem(id);
      };
    
      const cartItemAddHandler = (item) => {
        cartCttx.addItem({...item, amount: 1});
      };
      
  
    const totalAmount = `$${cartCttx.totalAmount.toFixed(2)}`;

    
    
    const cartItems =(
        <ul>{cartCttx.items.map((item) => {
        return(
            <div className ='checkout_list'>
                <div>
                    <img src={item.img} alt="Boat Headphones 690hz" />
                </div>
                <div className ='checkout_details' >
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <div>
                        <button onAdd={cartItemAddHandler.bind(null, item)}>+</button> 
                        <span style={{margin:'10px'}}>{item.amount}</span> 
                        <button onRemove={cartItemRemoveHandler.bind(null, item.id)}>-</button>                     
                    </div>
                </div>
            </div>
        )
    }
        
        )}</ul>
    );
     
    return (
        <div>
           <div style ={{margin:'60px 40px',fontSize:'18px',display:'flex'}} >
           <Switch>
                <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="arrow" /></div>                  
                </Link>
            </Switch>
                <h4 style= {{textAlign:'center',margin:'-7px 10px 10px 110px' }}>My Cart</h4>  
            </div>
            
            <div>
                {cartItems}
            </div>
            <div className = 'items_amount'>
                <p> {cartCttx.items.length}  items</p>
                <h4>{totalAmount}</h4>
             
              </div>
        </div>
    )
}

export default Checkout
