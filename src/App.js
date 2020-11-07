import React , { useEffect } from 'react'
import Login from './component/Login'
import Header from './component/Header'
import Checkout from './component/Checkout'
import Home from './component/Home'
import { BrowserRouter as Router ,Route , Switch} from 'react-router-dom'
import { auth } from './firebase'
import { useStatevalue } from './component/StateProvider'
import Payment from '../src/component/Payment'

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
              <Route exact path='/payment'>  <Payment /> </Route>
        </Switch>
     </Router>    
    </div>
  );
}

export default App;
