import React , { useEffect } from 'react'
import Login from './component/Login'
import Header from './component/Header'
import Checkout from './component/Checkout'
import Home from './component/Home'
import { BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import { auth } from './firebase'
import { useStatevalue } from './component/StateProvider'
import Payment from '../src/component/Payment'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from './component/Orders'

const promise = 
loadStripe('pk_test_51Hkq8JGIts7EMOBSv5mMltluGeD0uiNkHjjd2OIM4svVqI4LYlQDlBmMOQIeESUgtkf5zouZXYy5bIZAhDivtUzP00TCIqfWLc');



function App() {

  const [ ,dispatch]   =  useStatevalue()

  
  useEffect(() => {
    //will only once run //
   auth.onAuthStateChanged((author)=>{
      if(author){
         dispatch({type:'SET_USER',user:author})
      }else{
        dispatch({type:'SET_USER',user:null})
      }

    })
    

  },[dispatch])


  return (<div className="App">
      <Router> 
       <Header/> 
        <Switch>
              <Route exact path='/'> <Home/>  </Route>
              <Route exact path='/login'> <Login />  </Route>
              <Route exact path='/checkout'> <Checkout /> </Route>
              <Route exact path='/payment'>  <Elements stripe={promise} >  <Payment/> </Elements></Route>
              <Route exact path='/orders'> <Orders/> </Route>
        </Switch>
     </Router>    
    </div>
  );
}

export default App;
