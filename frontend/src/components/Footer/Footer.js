import React from "react";
import facebook from "../../image/facebook-min.svg"
import gitHub from "../../image/gitHub-min.svg"

const Footer =()=>{
    
    
    return(
        <footer className="footer">
            <h3 className="footer__tittle">© 2021 Supersite, Powered by News API</h3>
            <div className="footer__content" >
            < div className="footer__links">
               <a className="footer__links-text" href="/" >Home</a>
                <p className="footer__links-text" >Practicum By Yandex</p>      
                </div>      
                <div className="footer__links-btn" >
               <a href="http://github.com" target="_blank"  rel="noopener noreferrer"><img  className="footer__links-btn" src={gitHub} alt="github icon" /></a>
               <a  href="http://facebook.com" target="_blank" rel="noopener noreferrer" > <img className="footer__links-btn" src={facebook} alt="facebook icon" ></img></a> 
              </div>
     
           
              </div>
        </footer>
    )
}

export default Footer