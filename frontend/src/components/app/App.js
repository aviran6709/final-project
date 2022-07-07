
import React from "react";
import {  BrowserRouter } from "react-router-dom";
// import api from "../../api";
import Router from "../Router/Router";
import { UserContext } from "../UserConetext";


function App() {

  // const [data, setData] = React.useState({});

//   const getUserName =()=>{
//     api.getUserInfo().then((res) => {
//       setData(res)

//     }).catch(err => console.log(err))
//     console.log(data);
//  }
  return (
<div className = "app"  >
<UserContext.Provider 
value={"day"}
>
<BrowserRouter>
<Router/>
</BrowserRouter>
</UserContext.Provider>
  </div>
  )

}

export default App;
