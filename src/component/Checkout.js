import React from 'react'
import {useStatevalue} from './StateProvider'
import '../style/Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout({value}) {
    const [state ,] = useStatevalue()
   
    return (
    <div className='checkout'>
        <div className='checkout_left'>  
          <img className='checkout_ad'  
          src='offer.jpg' alt='' /> 
         {state.basket?.length === 0 ? (<div> <h1 style={{paddingLeft:'30px'}}> your shopping Basket is empty </h1> </div>) 
         : 
         (<div> <h2 className='checkout_title' style={{paddingLeft:'30px'}} > your Basket  {state.basket?.length} </h2>
               
           {
            state.basket.map((item,i)=>(
              <div key={i}>
                   <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
               />
              </div>
            ))
           }
          </div>)
         }    
        </div>
        {
           state.basket.length > 0 && (
               <div className='checkout_right'>
                 <Subtotal/>
               </div>
           )
        }
    </div>
    );
}

export default Checkout;
