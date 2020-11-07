import React from 'react'
import { useStatevalue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import '../style/Payment.css'
import { Link } from 'react-router-dom'

function Payment() {
   
  const [ {basket , user} , ] =  useStatevalue()

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
                      
                   </div>
               </div>

            </div>
        </div>
    )
}

export default Payment
