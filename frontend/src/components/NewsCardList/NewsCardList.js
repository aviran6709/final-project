 import NewsCard from "../NewsCard/NewsCard"
import Preloader from "../Preloader/Preloader"

 const  NewsCardList = (props )=>{
  const {cardData}=props


  
  if(!cardData ||cardData.length !== 0 ){
return(
<div className='news-results'>
  <h2 className={props.isDarkThem?" " :"news-results__tittle"}>{props.isDarkThem?"":"Search results"}</h2>  
  <div className='card-list'>
  {cardData? cardData.map((card, index)=> {
return(
<NewsCard data ={card }  isDarkThem = {props.isDarkThem} isSaved={true} isLogin={props.isLogin} key={index}></NewsCard>
)
  }):""}


</div>
<button className="news-results__btn" >Show more</button>
</div>
)
  }
  return(
    <Preloader isFund={false}></Preloader>
  )
}

  
 export default NewsCardList