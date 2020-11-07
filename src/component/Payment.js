import React ,{useState} from 'react'
import { useStatevalue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import '../style/Payment.css'
import { Link } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

//6.10//
function Payment() {
    
  const [ {basket , user} , ] =  useStatevalue()
  const stripe = useStripe();
  const elements = useElements();
  const [error , setError] = useState(null)
  const [disabled , setDisabled] = useState(true)
  const [processing , setProcessing] = useState(true)
  const [succeeded , setSucceeded] = useState(false)

  const handleSubmit =(e)=>{
      
  }

  const handleChange = (e)=>{

  }

    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1> Checkout ( <Link to='/checkout'> {basket?.length} items </Link>  ) </h1>
               {/* payment section  - delivery address */}
               <div className='payment_section'>
                   <div className='payment_title'>
                       <h3> Delivery Address  </h3>
                   </div>
                   <div className='payment_address'>
                       <p> { user?.email } </p>
                       <p> azamgarch up 223221 </p>
                       <p> hetuganj koinaha road</p>
                   </div>
               </div>

               {/* payment section  - review item */}
               <div className='payment_section'>
                   <div className='payment_title'>
                       <h3> Review items and delivery  </h3>
                   </div>
                   <div className='payment_items'>
                   {
                        basket?.map((item,i)=>(
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
                   </div>
               </div>


               {/* payment section  - payment method */}
               <div className='payment_section'>
                   <div className='payment_title'>
                       <h3> Payment Method  </h3>
                   </div>
                   <div className='payment_details'>
                       <form onSubmit={handleSubmit}>
                           <CardElement onChange={handleChange} />
                           <div className='payment_priceContainer'>
                           <CurrencyFormat 
                                    renderText ={(value)=>(
                                    <>
                                        <h3>
                                            Total ({basket?.length} items) : <strong>{`${value}`}</strong>
                                        </h3>
                                    </>
                                    )}
                                    decimalScale = {2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator ={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span> {processing ? <p> Processing </p> : 
                                    "Buy Now"} </span>
                                </button>
                           </div>
                       </form>
                   </div>
               </div>

            </div>
        </div>
    )
}

export default Payment
