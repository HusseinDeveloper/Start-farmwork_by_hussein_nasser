import React from 'react'

export default function About() {
  document.getElementById('title').innerText='About'
  return<>
        <section className="general-page">

<div className=" homesec">
<div className="content-home ">
</div>
<div className="text-center pt-4 text-white">
  <h2 className=' fw-bolder fs-1 mb-3 '>ABOUT COMPONENT</h2>
  <div className=' d-flex justify-content-center align-items-center mb-3'>
  <div className=' line me-3 bg-white '></div>
  <i className="fa-solid fa-star "></i>
  <div className=' line ms-3 bg-white '></div>
  </div>
  <div className=' container'>
    <div className="row text-start">
      <div className="col-md-6 ps-md-5">
        <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
      </div>
      <div className="col-md-6 ps-md-5">
        <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
      </div>
    </div>
  </div>

</div>
</div>
</section>
  </>
}
