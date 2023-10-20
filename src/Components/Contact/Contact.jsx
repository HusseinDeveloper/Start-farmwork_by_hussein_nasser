import React from 'react'
import './Contact.css'
import $ from 'jquery'
export default function Contact() {
  document.getElementById('title').innerText='Contact'
  function validName(){
    if($('#userName').val() !==''){

      $('.userName').animate({top:'0px'})
    }else{
      $('.userName').animate({top:'40px'})
    }
      
  }
  function validAge(){
    if($('#userAge').val() !==''){

      $('.userAge').animate({top:'0px'})
    }else{
      $('.userAge').animate({top:'40px'})
    }
      
  }
  function validEmail(){
    if($('#userEmail').val() !==''){

      $('.userEmail').animate({top:'0px'})
    }else{
      $('.userEmail').animate({top:'40px'})
    }
      
  }
  function validPassword(){
    if($('#userPassword').val() !==''){

      $('.userPassword').animate({top:'0px'})
    }else{
      $('.userPassword').animate({top:'40px'})
    }
      
  }
  return <>
      <section className='general-page'>
          <div className="">
<div className="content-home ">
</div>
<div className="text-center pt-4 color ">
  <h2 className=' fw-bolder fs-1 mb-3'>CONATCT SECTION</h2>
  <div className=' d-flex justify-content-center align-items-center mb-3'>
  <div className=' line me-3 bg-color'></div>
  <i className="fa-solid fa-star "></i>
  <div className=' line ms-3 bg-color '></div>
  </div>
</div>
 <form className='w-50 p-3 mx-auto mt-5 text-black'>
    <label className='valid userName' htmlFor="userName">userName :</label>
    <input onChange={validName} id='userName' type="text" className="form-control shadow-none border-0 border-bottom py-3 position-relative" placeholder='userName'/>
    <label className='valid userAge' htmlFor="userAge">userAge :</label>
    <input onChange={validAge} id='userAge' type="number" className="form-control shadow-none border-0 border-bottom py-3 position-relative" placeholder='userAge'/>
    <label className='valid userEmail' htmlFor="userEmail">userEmail :</label>
    <input onChange={validEmail} id='userEmail' type="email" className="form-control shadow-none border-0 border-bottom py-3 position-relative" placeholder='userEmail'/>
    <label className='valid userPassword' htmlFor="userPassword">userPassword :</label>
    <input onChange={validPassword} id='userPassword' type="password" className="form-control shadow-none border-0 border-bottom py-3 position-relative" placeholder='userPassword'/>
    <button type='button' className='btn text-white  mt-4'> send Message </button>
 </form>
</div>
      </section>
  </>
}