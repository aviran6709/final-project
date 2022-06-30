import react from "react"
import Navigation from "../Navigation/Navigation"
import SearchFrom from "../SearchForm/SearchFrom"

function Header (props){
    return(
    <react.Fragment>
    <div className ="header" >
        
<Navigation  openPopup={props.openPopup} isDarkThem={false} isLogin = {props.isLogin}></Navigation>
<SearchFrom></SearchFrom>

</div>

     </react.Fragment>   
    )
}

export default Header