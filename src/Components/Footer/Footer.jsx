import React from 'react'
import'./Footer.css'

export default function Footer() {
  return <>
    <footer className='footer '>
        <div className=" container">
            <div className="row m-4">
                <div className="col-md-4 card bg-transparent border-0 text-white ">
                    <div className=" card-body text-center">
                        <h3 className=' pt-2'>LOCATION</h3>
                        <p>2215 John Daniel Drive</p>
                        <p>Clark, MO 65243</p>
                    </div>
                </div>
                <div className="col-md-4 card bg-transparent border-0 text-white ">
                    <div className=" card-body text-center">
                        <h3 className=' pt-2'>AROUND THE WEB</h3>
                        <div className="icons d-flex justify-content-center">
                            <div className="icon mx-1">
                                <i className='fa-brands fa-facebook '></i>
                            </div>
                            <div className="icon mx-1">
                                <i className='fa-brands fa-twitter '></i>
                            </div>
                            <div className="icon mx-1">
                                <i className='fa-brands fa-linkedin '></i>
                            </div>
                            <div className="icon mx-1">
                                <i className='fa-solid fa-globe  '></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 card bg-transparent border-0 text-white p-0">
                    <div className=" card-body text-center">
                        <h3 className=' pt-2'>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </div>
    </footer>
            <div className="end-footer   text-white p-3 text-center">
                <p>Copyright © Your Website 2021</p>
            </div>
  </>
}
