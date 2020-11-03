import Login from './component/Login'
import Header from './component/Header'
import Checkout from './component/Checkout'
import Home from './component/Home'
import { BrowserRouter as Router ,Route , Switch} from 'react-router-dom'

function App() {
  return (<div className="App">
      <Router> 
       <Header/> 
        <Switch>
        <Route exact path='/'> <Home/>  </Route>
        <Route exact path='/login'> <Login />  </Route>
        <Route exact path='/checkout'> <Checkout value={'love'}/>  </Route>
        </Switch>
     </Router>    
    </div>
  );
}

export default App;
