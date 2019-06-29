import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Login from '../Login/Login';
import App from '../../App';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={(props) =>
//         isLogged === true ? <Component {...props} /> : <Redirect to='/' />
//       }
//     />
//   );


const Routing = () => (
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/Login' component={Login} />
       
  
      </div>
    </Router>
    
  );

  
  export default Routing;

  