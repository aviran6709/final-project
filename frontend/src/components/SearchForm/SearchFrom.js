const SearchFrom = () =>{
return(
    <div className="search-from">
        {/* need to move h1 & <P> to Header to let SearchForm to be free compo */}
        <h1 className="search-from__tittle">What's going on in the world?</h1>
<p className="search-from__sub-tittle"> Find the latest news on any topic and save them in your personal account.</p>
<div className="search-from__search-bar">
<input className="search-from__input"></input>
<button className="search-from__btn">Search</button>
</div>
    </div>
)
}

export default SearchFrom