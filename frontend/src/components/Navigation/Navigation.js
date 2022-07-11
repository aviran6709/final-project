import React from "react";
// import { UserContext } from "../UserConetext";

 function Navigation(props){
    
//  const user = React.useContext(UserContext);
 const name = "eddi"
//   user.name? user.name: "";
const [isItMenu, setIsItMenu]= React.useState(false);
const onClickBtnMenu =()=>{
    isItMenu?setIsItMenu(false):setIsItMenu(true)
}

return(
    <>
 <div className={isItMenu?"navigation__overly":" "}>
    <section className={props.isDarkThem &&!isItMenu ?  " navigation_dark navigation":isItMenu? " navigation_menu ":"navigation"}>
        <h1 className={props.isDarkThem &&!isItMenu? " navigation__header navigation__header_dark ": " navigation__header"}>NewsExplorer</h1>
        <button className={props.isDarkThem &&!isItMenu?"navigation__btn_type_menu_black navigation__btn_type_menu":!isItMenu?"navigation__btn_type_menu ":" navigation__btn_type_menu navigation__btn_type_close"} onClick={onClickBtnMenu}/>
    <ul className={isItMenu ?"navigation__buttons_menu navigation__buttons":"navigation__buttons"}>
    <li className="navigation__links" ><a className={props.isDarkThem &&!isItMenu? "navigation__links-tittle navigation__links-tittle_dark"  :"navigation__links-tittle"} href="/">Home</a></li>
       
        <li  className={props.isLogin ?  "navigation__links": " " }>{props.isLogin ? <a className={props.isDarkThem &&!isItMenu? "navigation__links-tittle_type_save-article navigation__links-tittle_type_save-article_dark":"navigation__links-tittle_type_save-article "} href="/saved-news
">Saved articles</a>: " "}</li>
{/* need to replace with logout */}
        <li className="navigation__links"><button onClick={!isItMenu ? props.openPopup : ()=> {
props.openPopup()
setIsItMenu(false)
        } } className={props.isLogin && props.isDarkThem &&!isItMenu? "navigation__btn_type_signout  navigation__btn_type_signout_dark" :props.isLogin? " navigation__btn_type_signout navigation__btn_type_signin ": "navigation__btn_type_signin "}>{props.isLogin ? `${name} ` :"Sign in" }</button></li>
    </ul>
    </section>
    
    </div>


    </>
)
 }
export default Navigation