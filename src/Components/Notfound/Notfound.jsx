import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  document.getElementById('title').innerText='404'
  return <>
  <section className="general-page">

<div className=" homesec ">
<div className="text-center pt-4 text-danger">
  <h1 className=' fw-bolder fs-1'>404</h1>
<h2 className=' fw-bolder fs-2  '>NOTFOUND COMPONENT</h2>
  <Link  className='btn btn-outline-danger text-white'>Go Home</Link>
</div>
</div>
</section>
</>
}
