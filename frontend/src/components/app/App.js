
import React from "react";
 import api from "../../api";
import Router from "../Router/Router";
import { UserContext } from "../UserConetext";
import Footer from '../Footer/Footer';


function App() {
const [data, setData]=React.useState(false);
const[savedCard , setSavedCard]=React.useState([])
const cardData ={imagLink:"https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" , date:"1.May.1990" ,title:"Everyone Needs a Special 'Sit Spot' in Nature" ,link:"https://dribbble.com/shots/1960178-Pixel-Crew" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"nasa.cpm",tag:"stars"}
const[isLoggedIn , setIsLoggedIn] =React.useState(false)

const login = async(data)=>{ 
  const token = await api.signin(data).then((res)=>{ 
    return res
  }).catch(console.log)
  setIsLoggedIn(true)
  console.log(token.token);
  return token
}


const checkToken  = async()=>{
 const tokenStatus = await api.setToken().then((res) => {
    if(res){
      return true
    }else
    { return false}
  }).catch(err => console.log(err))
 return tokenStatus
}

const createNewUser = async( data)=>{
 const status = await api.signup(data).then((res) => {
  if(res.data){ 
return true
  }else{ 
    return false 
  }
}).catch(console.log)
 return status
}

 const getSavedArticle = (id)=>{
  api.getArticle(id)
 .then(res =>{
   if(res){
     setSavedCard(res)  
     return res 
   }
  }).catch(console.log)

}

const getUserData= ()=>{
 
  api.getUserInfo().then((res) => {
    console.log(res);
    if(res){
      setIsLoggedIn(true)
      setData(res)
      return res
    }
  }).then((res)=>{
    getSavedArticle(res._id) 
  }).catch(err => console.log(err))


}



const saveNewArticle =()=>{ 
  api.saveArticle(cardData).then((res)=>{
console.log(res);
  }).catch(err => console.log(err))
}

const unsavedArticle =()=>{
  api.unsavedNewArticle().then((res)=>{
}).catch(err => console.log(err))}

 React.useEffect( () => {
getUserData();
},[]); 
  return (
<div className = "app"  
// onClick={checkToken}

>
<UserContext.Provider 
value={{user:data , savedCard:savedCard }}
>

<Router headerFunc={[{
loginFunc:login,
registerFunc:createNewUser,
checkToken:checkToken,
}
]}
LoggedIn={isLoggedIn}
></Router>
<Footer/>

</UserContext.Provider>
  </div>
  )

}

export default App;
