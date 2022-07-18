 import NewsCard from "../NewsCard/NewsCard"
import Preloader from "../Preloader/Preloader"
import React from "react";
 const  NewsCardList = (props )=>{
  const {cardData}=props
  console.log(props.isLogin);


  
  if(!cardData ||cardData.length !== 0 ){
return(
<section className='news-results'>
  <h2 className={props.isDarkThem?" " :"news-results__tittle"}>{props.isDarkThem?"":"Search results"}</h2>  
  <ul className='card-list'>
  {cardData? cardData.map((card, index)=> {
return(
<li className="card-list__element" key={index} ><NewsCard data ={card }  isDarkThem = {props.isDarkThem} isSaved={false} isLogin={props.isLogin} ></NewsCard></li>
)
  }):""}


</ul>
<button className="news-results__btn" >Show more</button>
</section>
)
  }
  return(
    <Preloader isFund={false}></Preloader>
  )
}

  
 export default NewsCardList