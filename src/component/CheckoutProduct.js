import React from 'react'
import '../style/CheckoutProduct.css'
import { useStatevalue } from './StateProvider'

function CheckoutProduct({id, title,price , rating ,image, hiddenbutton}) {
     
    const [, dispatch] = useStatevalue()


    const removeItem =()=>{
      dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id
      })
    }
    
    return (
        <div className='checkoutProduct'>
            <img src={image} alt='' className='checkoutProduct_image' />
          <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>  {title}</p>
            <p className='checkoutProduct_price'> 
              <small>$</small>
              <strong> {price} </strong>
            </p>
                <div className='checkoutProduct_rating'>
                {
                    Array(rating).fill().map((_,i)=>(
                        <p key={i}>@</p>
                    ))
                }
                </div>
                {
                    !hiddenbutton && <button onClick={removeItem}> Remove from basket </button>  
                }
         </div>  
        </div>
    )
}

export default CheckoutProduct
