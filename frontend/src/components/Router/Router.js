import {  Routes,Route } from 'react-router-dom';
import React from "react";
import SaveNewsHeader from '../SavedNewsHeader/SaveNewsHeader';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ProtectedRoute from '../ProtectedRoute';


const Router =(props)=>{

const  functionHeder = props.headerFunc[0]

React.useEffect( () => {

      },[]); 


    return(
        <Routes>
         <Route path='/saved-news' element={ <ProtectedRoute isAuth={props.LoggedIn} component={SaveNewsHeader}/> }/>
   <Route path='/' element={<><Header isLoggedIn={props.LoggedIn} headerFunc={functionHeder}/> <Main  isLoggedIn={props.LoggedIn}/></>} />
      
        </Routes>
    )
}

export default Router