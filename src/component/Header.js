import { Link } from 'react-router-dom'
import  '../style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { useStatevalue } from './StateProvider';
import {auth} from '../firebase'


function Header() {
  const [{ basket , user},] = useStatevalue()
   
  const Signout = ()=>{
      auth.signOut();
  }
 
//   console.log(state.basket)
    return ( 
        <nav className='header'>
          {/* logo left image */}
          <Link to="/"> 
           <img className='header-logo' src="logo-amazon.png"  alt='' />
          </Link>
          {/* seach box */}
          <div className='header_search'>
          <input type='text' className='header_searchInput' />
          <SearchIcon className='header_searchIcon' />
          </div>
          {/* basket icon with no */}
          <div className='header_nav'>
              {/* //first link */}
             <Link to={!user && '/login'}> 
               <div onClick={Signout} className='header_link'>
                <span style={{fontSize:'10px'}}> {user ? user?.email :'Hello Guest' } </span>
                <span style={{fontSize:'15px'}}> {user ? 'Sign Out' : 'Sign In'} </span>
               </div>
             </Link> 
              {/* second link     */}
             <Link to='/login' > 
             <div className='header_link'>
                <span style={{fontSize:'10px'}} >Returns</span>
                <span style={{fontSize:'15px'}}> Orders</span>
             </div>
             </Link> 
             {/* thired link */}
             <Link to='/login'> 
              <div className='header_link' >
                <span style={{fontSize:'10px'}} >Your</span>
                <span style={{fontSize:'15px'}}>Prime</span>
              </div>
             </Link> 
             {/* //fourth link */}
             <Link to='/checkout' > 
             <div className='header_link'>
                <span style={{fontSize:'10px'}} >Basket</span>
                <span style={{fontSize:'15px'}}>{basket?.length}</span>
             </div>
             </Link> 
          </div>
              {/* <div>
                <span  > Bracket </span>
          </div> */}
        </nav>
    )
}

export default Header
//flex default me row wise hota hai