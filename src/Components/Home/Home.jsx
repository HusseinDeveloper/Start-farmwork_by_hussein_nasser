import React from 'react'
import userImage from './Images/avataaars.svg'
import './Home.css'

export default function Home() {
  document.getElementById('title').innerText='Home'
  return<>
      
        <section className="general-page">

        <div className=" homesec">
        <div className="content-home ">
          <img src={userImage} className=' mb-3' alt="" />
        </div>
        <div className="text-center pt-4 text-white">
          <h2 className=' fw-bolder fs-1 mb-3'>START FRAMEWORK</h2>
          <div className=' d-flex justify-content-center align-items-center mb-3'>
          <div className=' line me-3 bg-white'></div>
          <i className="fa-solid fa-star "></i>
          <div className=' line ms-3 bg-white'></div>
          </div>
          <div>
          Graphic Artist - Web Designer - Illustrator
          </div>

        </div>
        </div>
        </section>
      </>

}
