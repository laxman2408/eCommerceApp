import React,{useContext} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { FcLike } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import {Link,Switch} from 'react-router-dom'
import CartButton from '../Lastpage/CartButton';
import CartContext from '../Lastpage/CartContext';


function Details1() {
    const cartCtx = useContext(CartContext);
    
    const addToCart = () => {
         cartCtx.addItem({
             id:'2',
             name:'Boat Bass 900',
            amount:1,
            price:1560.00,
             img:'./images/Boat.png'
         })
         console.log('Details1 Worked');
    }
    return (
        <div className = 'details' >
            <div style ={{margin:'40px',fontSize:'18px'}} >
            <Switch>
                <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="arrow" /></div>                  
                </Link>
            </Switch>
            <CartButton/>
  
            </div>
            <div className= "details_img" style={{paddingTop:'200px'}}>
                <img src= './images/Boat.png' alt= 'Details'/>
            </div>
            <div className = 'details_page'>
                <div className ='page_bar'>
                    <h3>Headphones Boat</h3>
                    <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px'}}><FcLike /></div>
                </div>
                <div className = 'page_description'>
                    <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears</p>
                </div>
                <div className = 'page_footer'>
                    <div className ='footer_size'>
                        <p>Model</p>
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    <div className='footer_color'><p>color</p> 
                        <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px',color:'skyblue'}}><BsCircleFill/></div>
                        <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
                    </div>
                    
                </div>
                
            </div>
            <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}}  className = 'AddCart'>
            <Link to = '/checkout'><button onClick = {addToCart} >Add to cart: $ 1560.00</button></Link>
                </div>
        </div>
    )
}

export default Details1
