 import "./Navigation.css"
 function Navigation(props){
console.log(props.isLogin);

return(
    <div className="navigation">
        <h1 className="navigation__header">newsExplorer</h1>
    <li className="navigation__butenes">
    <ul className="navigation__links" ><a href="/">home</a></ul>
       
        <ul  className={props.isLogin ?  "navigation__links": " " }>{props.isLogin ? <a href="/saved-news
">saved articles</a>: " "}</ul>
        <ul className="navigation__links"><button>login</button></ul>
    </li>
    </div>
)

 }
export default Navigation