import React from 'react'
import '../style/Product.css'
import { useStatevalue } from './StateProvider'

function Product({id,title,image,price,rating}) {

  const [,dispatch] = useStatevalue()   
    
  const addTobasket=()=>{
        
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating
            }
        })
    }
   
    return (
        <div className='product'>
            <div className='product_info'>
            <p>{title} </p>
            <p className='product_price'> 
             <small>rupee</small>
             <strong>{price}</strong>
            </p>
            <div className='product_rating'>
               {
                   Array(rating).fill().map((_,i)=>(
                     <p key={i}> <strong>*</strong></p>
                   ))
               }
            </div>
            </div>
            <img src={image} alt=''  />
            <button onClick={addTobasket}> Add to basket </button>
        </div>
    )
}

export default Product
