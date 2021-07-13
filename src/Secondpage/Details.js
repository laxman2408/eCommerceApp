import React,{useContext,useRef,useCallback, useState} from 'react'
import {FaArrowLeft} from 'react-icons/fa'
import { FcLike } from "react-icons/fc";
import { FaAngleDown } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import {Link,Switch, useParams} from 'react-router-dom'
 import CartContext from '../Lastpage/CartContext';
 import CartButton from '../Lastpage/CartButton';
import Button from '@material-ui/core/Button';
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

function Details(props) {


    const [activeClass, setClass] = useState('');
    const details_data = () => [
        {
            id:'1',
            product_name : 'Boat_690',
            
            price:123.00,
            image:'../images/Boat.png',
            amount:1,
            color:'blue',
        },
        {
            id:'2',
            product_name : 'Boat_900',
            price:1230.00,
            image:'../images/Boat.png',
            amount:1,
            color:'blue',
        },
        {
            id:'3',
            product_name : 'Boat_250',
            amount:1,
            price:230.00,
            image:'../images/Boat.png',
            color:'brown',
        }, {
            id:'4',
            product_name : 'Boat_550',
            price:420.00,
            amount:1,
            image:'../images/Boat.png',

        },
    ]

    const [data] = useState(details_data)
    const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);
  const {product_name} = useParams();

    const cartCtx = useContext(CartContext);
    
   const addToCart = () => {
       <div>
           {data.filter(item => {return item.product_name === product_name}).map((item) => {
           return(
              cartCtx.addItem({
            id:item.id,
            name:item.product_name,
            price:item.price,
            amount:item.amount,
            img:item.image
        }) 
           )
       })}
       </div>
       
        
        console.log('Worked');
   }
    return (
        <div className = 'details'>
            <div style ={{margin:'40px',fontSize:'18px'}} >
            <Switch>
                <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="arrow" /></div>                  
                </Link>
            </Switch>

                <CartButton/>
            </div>
            <div>
                <div>
                {data.map((item,index) => {
                return(
                   <div className = 'details_header' key={index}>
                    <div className = 'details_img'>
                    <QuickPinchZoom onUpdate = {onUpdate}>
                        <img ref = {imgRef} src= {item.image} alt= 'Details'/>
                        </QuickPinchZoom>   
                    </div>{console.log('www')}
                    <div className = 'details_page'>
                        <div className ='page_bar'>
                            {item.product_name}
                    <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px'}}><FcLike /></div>
                        </div>
                        <div className = 'page_description'>
                            <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears</p>
                         </div>
                         <div className = 'page_footer'>
                        <div className ='footer_size'>
                            <p>model </p>
                            <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
                        </div>
                        <div className='footer_color'><p>color</p> 
                            <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><BsCircleFill/></div>
                            <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
                        </div>
                    </div>
                    
                    </div>
                    <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}}  className = 'AddCart'>
                     <Link to = '/Checkout'><Button onClick = {addToCart}><div onClick={() => setClass('active')} className={activeClass}>Add to cart</div></Button></Link>   
                    </div>
                </div> 
                )
                
                ;
                
                
            })}
            </div>
                
            </div>

        </div>
    )
}

export default Details


























// import React,{useContext,useRef,useCallback, useState} from 'react'
// import {FaArrowLeft} from 'react-icons/fa'
// import { FcLike } from "react-icons/fc";
// import { FaAngleDown } from "react-icons/fa";
// import { BsCircleFill } from "react-icons/bs";
// import {Link,Switch,useParams} from 'react-router-dom'


// import CartContext from '../Lastpage/CartContext';
// import CartButton from '../Lastpage/CartButton';
// import Button from '@material-ui/core/Button';
// import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
// import Button from '@material-ui/core/Button';























// function Details(props) {


//     const [activeClass, setClass] = useState('');
//     const details_data = () => [
//         {
//             id:'1',
//             img:'./images/Boat.png',
//             product_name : 'Boat_690',
//             Model :'wireless',
//             color:'red',
//         },
//         {
//             id:'2',
//             img:'./images/Boat.png',
//             product_name : 'Boat_900 ',
//             Model :'wireless',
//             color:'black',
//         },
//         {
//             id:'3',
//             img:'./images/Boat.png',
//             product_name : 'Boat_250',
//             Model :'wireless',
//             color:'brown',
//         }, {
//             id:'4',
//             img:'./images/Boat.png',
//             product_name : 'Boat_550',
//             Model :'wireless',
//             color:'red',
//         },
//     ]

//     const [data] = useState(details_data)
//     const imgRef = useRef();
//   const onUpdate = useCallback(({ x, y, scale }) => {
//     const { current: img } = imgRef;

//     if (img) {
//       const value = make3dTransformValue({ x, y, scale });

//       img.style.setProperty("transform", value);
//     }
//   }, []);
//   const {product_name} = useParams();

//     const cartCtx = useContext(CartContext);
    
//    const addToCart = () => {
//        <div>
//            {data.map((item) => {
//            return(
//               cartCtx.addItem({
//             id:item.id,
//             name:item.product_name,
//             price:item.price,
//             amount:1,
//             img:item.img
//         }) 
//            )
//        })}
//        </div>
       
        
//         console.log('Worked');
//    }
//     return (
//         <div className = 'details'>
//             <div style ={{margin:'40px',fontSize:'18px'}} >
//             <Switch>
//                 <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="arrow" /></div>                  
//                 </Link>
//             </Switch>

//                 <CartButton/>
//             </div>
//             <div>
//                 {data.filter(item => item.product_name === product_name).map((item,index) => {
//                 return(
//                 <div className = 'details_header' key={index}>
//                     <div className = 'details_img'>
//                     <QuickPinchZoom onUpdate = {onUpdate}><img ref = {imgRef} src= {item.img} alt= 'Details'/></QuickPinchZoom>   
//                     </div>
//                     <div className = 'details_page'>
//                         <div className ='page_bar'>
//                             {item.product_name}
//                     <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px'}}><FcLike /></div>
//                         </div>
//                         <div className = 'page_description'>
//                             <p></p>
//                          </div>
//                          <div className = 'page_footer'>
//                         <div className ='footer_size'>
//                             <p>model</p>
//                             <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
//                         </div>
//                         <div className='footer_color'><p>color</p> 
//                             <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><BsCircleFill/></div>
//                             <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
//                         </div>
//                     </div>
                    
//                     </div>
//                     <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}}  className = 'AddCart'>
//                      <Link to = '/Checkout'><Button onClick = {addToCart}><div onClick={() => setClass('active')} className={activeClass}>Add to cart: $ 560.00</div></Button></Link>   
//                     </div>
//                 </div>
//                 );
                
                
//             })}
//             </div>

//         </div>
//     )
// }

// export default Details


// function Details(props) {


//     const cartCtx = useContext(CartContext);
    
//    const addToCart = () => {
//         cartCtx.addItem({
//             id:'1',
//             name:'Boat Headphones 690hz',
//             price: 560.00,
//             amount:1,
//             img:'./images/Boat.png'
//         })
//         console.log('Worked');
//    }
//     return (
//         <div className = 'details'>
//             <div style ={{margin:'40px',fontSize:'18px'}} >
//             <Switch>
//                 <Link to="/"><div style = {{float:'left',cursor:'pointer'}}><FaArrowLeft className="arrow" /></div>                  
//                 </Link>
//             </Switch>

//                 <CartButton/>
//             </div>
//             {/* {data.map((item) => {
//                 return(
//                 <div className = 'details_header'>
//                     <div className = 'details_img'>
//                         <img src={item.img} alt=" " />
//                     </div>
//                     <div className = 'details_page'>
//                         {item.product_name}
//                     </div>
//                 </div>
//                 );
                
                
//             })} */}
//             <div className= "details_img" style={{paddingTop:'90px'}}>
//                 <img src= './images/Boat.png' alt= '-Details'/>
//             </div>
//             <div className = 'details_page'>
//                 <div className ='page_bar'>
//                     <h3>Boat Headphones 690hz</h3>
//                     <div style = {{float:'right',margin:'20px 10px 0 100px',fontSize:'20px'}}><FcLike /></div>
//                 </div>
//                 <div className = 'page_description'>
//                     <p>Headphones are a pair of small loudspeaker drivers worn on or around the head over a user's ears</p>
//                 </div>
//                 <div className = 'page_footer'>
//                     <div className ='footer_size'>
//                         <p>Model</p>
//                         <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><FaAngleDown/></div>
//                     </div>
//                     <div className='footer_color'><p>color</p> 
//                         <div style = {{float:'right',margin:'17px 10px 0 10px',fontSize:'20px'}}><BsCircleFill/></div>
//                         <div style = {{float:'right',margin:'17px 10px 0 0px',fontSize:'20px'}}><FaAngleDown/></div>
//                     </div>
                    
//                 </div>
                
//             </div>
//                 <div style = {{textAlign:'center',fontWeight:'600',margin:'20px'}}  className = 'AddCart'>
//                        <Link to = '/checkout'> <button onClick = {addToCart} >Add to cart: $ 560.00</button></Link>
//                 </div>
//         </div>
//     )
// }

// export default Details
