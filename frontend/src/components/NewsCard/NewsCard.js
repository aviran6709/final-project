import React from "react";

const NewsCard = (props) => {
  const { image, link, date, title, text, source ,keyword } = props.data;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSavedCard, setIsSavedCard] = React.useState(false);

const buttonHandler =()=>{
  if(!props.isDarkThem && props.isLogin){}
  setIsSavedCard(true)

}

  const toggelSigninBtn =()=>{
    if(props.isLogin||props.isDarkThem){
      setIsOpen(false)
    }
    else{isOpen?  setIsOpen(false): setIsOpen(true)}

  }
  return (
    <div className="card">
      <img className="card__img" src={image} alt={`${title}`}/>
      {props.isDarkThem? <p className="card__tag" >{keyword}</p>: ""}
      <button className={props.isDarkThem?"card__btn-saved ":`card__btn ${isSavedCard ? " card__btn-clicked" :""}`  } onClick={buttonHandler} onMouseEnter={toggelSigninBtn} onMouseLeave={toggelSigninBtn}></button>
      { isOpen  ? <button className="card__link"  > {props.isDarkThem ?"Remove from saved":"Sign in to save articles"}</button>:" "}
      <p className="card__date">{date}</p>
      <h3 className="card__tittle">{title}</h3>
      <p className="card__text">{text}</p>
      <p className="card__src">{source}</p>
    </div>
  );
};
export default NewsCard;
