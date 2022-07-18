import React from "react";
const SearchFrom = () => {
  //btn color change by click
 const [btnColor,setBtnColor] = React.useState(false);

  return (
    <section className="search-from">
   
      <h1 className="search-from__tittle">What's going on in the world?</h1>
      <p className="search-from__sub-tittle">
  
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form action="#" method="POST"  className="search-from__search-bar">
        <input className="search-from__input" placeholder="Enter topic"></input>
        <button className={!btnColor?"search-from__btn":"search-from__btn search-from__btn_clicked"} onClick={(e)=>{
          e.preventDefault()
          setBtnColor(true)
        }}
         >Search</button>
      </form>
    </section>
  );
};

export default SearchFrom;
