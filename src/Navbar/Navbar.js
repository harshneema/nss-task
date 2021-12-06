import React from "react";
import { useState } from "react";
import './Navbar.css';
import Home from '../Home/home.js'
import { BsSearch } from 'react-icons/bs'
import { CgProfile , CgMenuLeft } from "react-icons/cg";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


const Navbar = () => {
    const [Toggle, setToggle] = useState(false)
    return(
        <div >
            <Router>
                <div> 
                   { Toggle ? ( <div className="ham" onClick={() => {setToggle(!Toggle)}}> <CgMenuLeft/> </div>) :
                  (    
                  <div className="Navbar">
                    <div className="ham2" onClick={() => {setToggle(!Toggle)}}> <CgMenuLeft/> </div>
                   <div className="profile" style={{ position: "absolute" , left: "1vw" , "padding": "5px"}}><CgProfile/> Harry Truman </div>
                   <div className="links">
                       <Link to="/PopularRecipes"> Popular Recipes</Link>
                       <Link to="/SavedRecipes">Saved Recipes</Link>
                       <Link to="/ShoppingList">Shopping List</Link>
                       <Link to="/Settings">Settings</Link>
                   </div>
                   <div className="Search"><BsSearch/> </div>
               </div>)}
                       
                        <Routes>
                        <Route exact path="/PopularRecipes" element={<Home/>} />
                        </Routes>
                </div>
            </Router>
        </div>  
    );
};

export default Navbar;