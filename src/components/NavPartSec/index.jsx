import React from "react";
import './index.css';

import { NavLink } from "react-router-dom";
const index = ()=>{
    window.addEventListener("scroll", function () {
        const search = document.querySelector("#par")
        search.classList.toggle("actives", window.scrollY > 100)
      })
    
    return(
            <div className="nav-part-sec d-flex justify-content-center align-items-center" id="par">
                <div className="maincha">
                    <li id="qizil"><NavLink to={"/"} className="nav-link mt-4">Overview</NavLink></li>
                    <li id="qizil"><NavLink to={"/rep"}  className="nav-link mt-4">Repositories</NavLink></li>
                    <li className="nav-link mt-4">Projects</li>
                    <li className="nav-link mt-4">Packages</li>
                    <li className="nav-link mt-4">Starts</li>
                </div>
            </div>
    )
}
export default index