import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

import Login from './Login'

function Home(){
  const token=(useSelector((state) => state.user.userToken.token))
  
  return(
    <div>
        {token?  <Link to='/list/'><h1>Bienvenido</h1></Link>: <Login/> }
    </div>
    )
  };
  
  export default Home;