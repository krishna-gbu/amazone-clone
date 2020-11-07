import React from 'react'
import '../style/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer'
import { useStatevalue } from './StateProvider';
import { useHistory } from 'react-router-dom';


function Subtotal() {
   const [{basket} , ] = useStatevalue()
   const history =  useHistory()

//3.26
    return (
        <div className='subtotal'>
            <CurrencyFormat 
              renderText ={(value)=>(
              <>
                <p>
                    Subtotal ({basket?.length} items) : <strong>{`${value}`}</strong>
                </p>
                <small className='subtotal_gift'>  
                    <input type='checkbox'/> this order contains a gift
                </small>
               </>
              )}

             decimalScale = {2}
             value={getBasketTotal(basket)}
             displayType={'text'}
             thousandSeparator ={true}
             prefix={"$"}
           />
           <button onClick={e =>history.push('/payment')}  >Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
