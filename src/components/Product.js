import React,{useState} from 'react'
import { Link} from 'react-router-dom';
//ort Products from "./Products"

const MainContent = () => {
    const Products = () => [
        {
            id:'1',
            product_name : 'Boat_690hz',
            price: '$ 123.00',
            img:'./images/Boat.png'
        },
        {
            id:'2',
            product_name : 'Boat_900',
            price: '$ 1230.00',
            img:'./images/Boat.png'
        }
        ,{
            id:'3',
            product_name : 'Boat_250',
            price: '$230.00',
            img:'./images/Boat.png'
        },{
            id:'4',
            product_name:'Boat_550',
            price:'$ 420.00',
            img:'./images/Boat.png'
        }
    ]
    const [data] = useState(Products);
    return (
      <div className="main_content">
        {data.map((item) => {
            return(
                <div className="card" >
           <Link  to = {`/Details/${item.product_name}`} >
                <div className="card_img">
                    <img src={item.img} alt="Boat headphones" />
                </div>
                <div className="card_header">
                    <h2>{item.product_name}</h2>
                    <p>{item.price}</p>
                </div>
            </Link>
            </div>
            )
            
            
          
        })}
      </div>
    );
}
export default MainContent;