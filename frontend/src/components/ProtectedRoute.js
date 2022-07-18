import { UserContext } from "./UserConetext";
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, ...props  }) {
  // const [auth ,setAuth]=React.useState(false)
  //  console.log("props login porotR UUse" , props.isAuth );
  // React.useEffect( () => {
  //  
  //   if(props.isAuth === true){
  //       setAuth (true)
  //   }else{
  //       setAuth(false)
  //   }
  //     },[props.isAuth]); 

  return (
    props.isAuth ?  <Component {...props} />  :<Navigate to="/" />
    
  )
}
export default ProtectedRoute; 

