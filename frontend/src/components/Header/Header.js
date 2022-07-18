import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchFrom from "../SearchForm/SearchFrom"
import PopupWithForm from "../PopupWithForm/PopupWithForm";
function Header ( props ){
 const  headerFuncDta =  props.headerFunc
   const isLoggedIn =  props.isLoggedIn
    const [isOpen, setIsOpen]= React.useState(false);
const closePopups =()=>{
   setIsOpen(false)
}
const openPopup = ()=>{
   setIsOpen(true)
}


React.useEffect(() => {
   const closeByEscape = (e) => {
     if (e.key === 'Escape') {
      closePopups();
     }
   }
   document.addEventListener('keydown', closeByEscape)   
   return () => document.removeEventListener('keydown', closeByEscape)
}, [])
    return(
    <header  className ="header" >
    <Navigation  openPopup={openPopup} isDarkThem={false} isLogin ={isLoggedIn}></Navigation>    
    <PopupWithForm isOpen={isOpen} login={headerFuncDta.loginFunc} createNewUser={headerFuncDta.registerFunc}
onClose={closePopups}
></PopupWithForm>
<SearchFrom></SearchFrom>
</header>
)
}

export default Header