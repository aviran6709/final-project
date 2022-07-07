import React from "react";
import Navigation from "../Navigation/Navigation"
import SearchFrom from "../SearchForm/SearchFrom"

function Header (props){
    return(
   
    <header  className ="header" >
        
<Navigation  openPopup={props.openPopup} isDarkThem={false} isLogin = {props.isLogin}></Navigation>
<SearchFrom></SearchFrom>

</header>

  
    )
}

export default Header