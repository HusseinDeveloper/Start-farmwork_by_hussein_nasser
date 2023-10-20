import React, { useState } from 'react';
import './Portofolio.css';
import port1 from './images/poert1.png';
import port2 from './images/port2.png';
import port3 from './images/port3.png';
import $ from 'jquery';

export default function Portofolio() {
  document.getElementById('title').innerText = 'Portofolio';

  const [isModelVisible, setModelVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModel = (image) => {
    setSelectedImage(image);
    setModelVisible(true);
  };

  const closeModel = () => {
    setModelVisible(false);
  };

  return (
    <>
      <section className="general-page ">
        <div className=" ">
          <div className="content-home "></div>
          <div className="text-center pt-4 color">
            <h2 className="fw-bolder fs-1 mb-3">PORTFOLIO COMPONENT</h2>
            <div className="d-flex justify-content-center align-items-center mb-3">
              <div className="line me-3 bg-color "></div>
              <i className="fa-solid fa-star  "></i>
              <div className="line ms-3 bg-color"></div>
            </div>
          </div>
          <div className="container">
            <div className="row g-5 mb-4">
              <div
                className="card-image col-lg-4 col-md-6"
                onClick={() => openModel(port1)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100" src={port1} alt="" />
                  <div className="layer position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div
                className="card-image col-lg-4 col-md-6"
                onClick={() => openModel(port2)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100" src={port2} alt="" />
                  <div className="layer position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div
                className="card-image col-lg-4 col-md-6"
                onClick={() => openModel(port3)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100" src={port3} alt="" />
                  <div className="layer position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div
                className="card-image col-lg-4 col-md-6"
                onClick={() => openModel(port1)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100" src={port1} alt="" />
                  <div className="layer position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div
                className="card-image col-lg-4 col-md-6"
                onClick={() => openModel(port2)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100" src={port2} alt="" />
                  <div className="layer position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
              <div
                className="card-image col-lg-4 col-md-6"
                onClick={() => openModel(port3)}
              >
                <div className="rounded-3 overflow-hidden position-relative">
                  <img className="w-100" src={port3} alt="" />
                  <div className="layer position-absolute top-0 end-0 start-0 bottom-0 d-flex justify-content-center align-items-center">
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModelVisible && (
        <div
          className="model position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center"
          onClick={closeModel}
        >
          <img src={selectedImage} alt="" />
        </div>
      )}
    </>
  );
}