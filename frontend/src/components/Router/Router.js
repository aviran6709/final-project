import {  Routes,Route } from 'react-router-dom';
import React from "react";
import Main from '../Main/Main';
import SaveNewsHeader from '../SavedNewsHeader/SaveNewsHeader';

const Router =()=>{
    return(
        <Routes>
     <Route  exact path="/" element={<Main/>}   />
        <Route path='/saved-news' element={<SaveNewsHeader/>}/>
        </Routes>
    )
}

export default Router