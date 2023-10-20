import React from 'react'
import './Navbar.css'
import { Link ,NavLink } from 'react-router-dom'
import $ from 'jquery'
export default function Navbar() {
  $(window).scroll(()=>{
  //  console.log('sasasa')
  let scrollOfset = $('.navbar').offset().top;
  if(scrollOfset !== 0){
    $('.navbar').removeClass('py-4')
  }else{
    $('.navbar').addClass('py-4')    
  }
  });
  return<>
  
  <nav className="navbar navbar-expand-lg fixed-top navbar-light  py-4">
  <div className="container">
    <Link className="navbar-brand fw-bolder fs-2 me-3 pt-1 text-white " to="/">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 me-3 mb-lg-0">
        <li className="nav-item ">
          <NavLink className="nav-link text-white  fw-bold mt-3 mt-md-0 mx-1 px-2 " aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-bold mt-3 mt-md-0 mx-1 px-2 " aria-current="page" to="portofolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-white  fw-bold mt-3 mt-md-0 mx-1 px-2 " aria-current="page" to="contact">CONTACT</NavLink>
        </li>

      </ul>

    </div>
  </div>
</nav>
  
  </>
}
