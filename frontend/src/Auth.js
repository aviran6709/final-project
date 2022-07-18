import react from "react"
import api from "./api"

    const Auth  = async()=>{   
     return  await api.setToken().then((res) => {
           if(res){
             return true
           }else
           { return false}
         }).catch(err => console.log(err))
        
       
       }
    





export default Auth