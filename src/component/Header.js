import { Link } from 'react-router-dom'
import  '../style/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { useStatevalue } from './StateProvider';

// 1:48

function Header() {
  const [state,] = useStatevalue()
   

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
             <Link to='/login' className='header_link'> 
                <span style={{fontSize:'10px'}}>Hello krish</span>
                <span style={{fontSize:'15px'}} >Sign In</span>
             </Link> 
              {/* second link     */}
             <Link to='/login' className='header_link'> 
                <span style={{fontSize:'10px'}} >Returns</span>
                <span style={{fontSize:'15px'}}> Orders</span>
             </Link> 
             {/* thired link */}
             <Link to='/login' className='header_link'> 
                <span style={{fontSize:'10px'}} >Your</span>
                <span style={{fontSize:'15px'}}>Prime</span>
             </Link> 
             {/* //fourth link */}
             <Link to='/checkout' className='header_link'> 
                <span style={{fontSize:'10px'}} >Basket</span>
                <span style={{fontSize:'15px'}}>{state.basket?.length}</span>
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