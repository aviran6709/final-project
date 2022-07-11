
// import Main from '../Main/Main';
// import Header from '../Header/Header'
import React from "react";

//  import api from "../../api";
import Router from "../Router/Router";
import { UserContext } from "../UserConetext";
import Footer from '../Footer/Footer';
// import SaveNewsHeader from '../SavedNewsHeader/SaveNewsHeader';


function App() {
// const [data, setData]=React.useState("")
const data ={name:"adi"}
// const[savedCard , setSavedCard]=React.useState()
// const cardData ={imagLink:"https://images.unsplash.com/photo-1517458776179-baae60e41ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" , date:"1.2.335" ,title:"Everyone Needs a Special 'Sit Spot' in Nature" ,link:"https://dribbble.com/shots/1960178-Pixel-Crew" ,text:`Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find..`,src:"wikiki.cpm",tag:"nature"}
// const upDateData =(data)=>{
//   setSavedCard(data)
//   console.log(savedCard);
// }
// const setCurrentData =  (data)=>{
//     setData(data)
    
//  }
// const getSavedArticle =()=>{
//   api.getArticle(data._id).then(res =>{
//     if(res){
//       upDateData(res)   
//     }
//    })

// }

// const saveNewArticle =()=>{ 
//   api.saveArticle(cardData).then((res)=>{
// console.log(res);
//   })
// }
// const unsavedArticle =()=>{
//   api.unsavedNewArticle().then((res)=>{
//     console.log(res);
// })}
//  React.useEffect(() => {
//   api.getUserInfo().then((res) => {
//     setCurrentData(res)
//   }).catch(err => console.log(err))
//  getSavedArticle()

// }, []); 

  return (
<div className = "app"  
// onClick={getSavedArticle}

>
<UserContext.Provider 
value={data}
>

<Router></Router>
<Footer/>

</UserContext.Provider>
  </div>
  )

}

export default App;
