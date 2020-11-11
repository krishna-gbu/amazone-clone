import React ,{useEffect, useState} from 'react'
import { useStatevalue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import '../style/Payment.css'
import { Link, useHistory } from 'react-router-dom'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer'
import axios from './axios'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { db } from '../firebase'

//6.10//
function Payment() { 
        const [ {basket , user} , dispatch ] =  useStatevalue()
        const history = useHistory()


        const stripe = useStripe();
        const elements = useElements();

        const [error , setError] = useState(null)
        const [disabled , setDisabled] = useState(true)
        const [processing , setProcessing] = useState("")
        const [succeeded , setSucceeded] = useState(false)
        const [clientSecret , setClientSecret] = useState(true)
        

    useEffect(()=>{ 
        //genrate the special stripe secret  which allows us to charge
        //  a customer
        const getClientSecret = async () =>{
            const responce = await axios({
                method:'POST',
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
                //? ki bad query param hota hai
            })
            // console.log(responce.data.clientSecret);
            setClientSecret(responce.data.clientSecret)
        }
         
        getClientSecret();
    },[basket])

    // console.log('client key >>>>>>', clientSecret)


  const handleSubmit = async (e)=>{
      e.preventDefault();
      setProcessing(true);
     
      await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
              card:elements.getElement(CardElement)
          }
      }).then(({paymentIntent})=>{
          //paymentIntent = payment confirmation
          setSucceeded(true)
          setError(null)
          setProcessing(false)
          
          db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
              basket:basket,
              amount:paymentIntent.amount,
              created:paymentIntent.created
          })
            
          dispatch({type:'EMPTY_BASKET'})
         
          history.replace('/orders')
      }).catch((e)=>{
          alert(e.message)
      })
  }

  const handleChange = (e)=>{         
     setDisabled(e.empty);
     setError(e.error ? e.error.message : "");          
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
                            {/* error */}
                           {
                             error && <div> {error} </div>
                           }
                       </form>
                   </div>
               </div>

            </div>
        </div>
    )
}

export default Payment
