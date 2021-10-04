import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
        <div className="footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="left-container text-start">
                <h1>Educati<span className="color-cng">O</span>n</h1>
                  <div className="icons-container d-flex text-center ">
                    <div className="icon">
                    <i class="fab fa-instagram"></i>
                    </div>
                    <div className="icon">
                    <i class="fab fa-twitter"></i>
                    </div>
                    <div className="icon">
                    <i class="fab fa-youtube"></i>
                    </div>
                    <div className="icon">
                    <i class="fab fa-facebook"></i>
                    </div>
                  </div>
                  <p className="mt-4 ">
                    <small>
                    International students bring their perspectives and experiences to our classrooms and campuses. That benefits all of our students.
                   
                    </small>
                  </p>
  
                  <p className="mt-5">
                    <small>sudeb © . All rights reserved.</small>
                  </p>
                </div>
              </div>
              <div className="col-md-2">
                
              </div>
              <div className="col-md-5">
                <div className="right-footer-container">
                  
                  <div className="phone d-flex align-items-center justify-content-center mt-4">
                    <div className="foter-phone-icon">
                    <i class="fas fa-phone"></i>
                    </div>
                    <div>
                      <h5>+88 01723813821</h5>
                    </div>
                  </div>
                  <div className="map d-flex align-items-center justify-content-center">
                    <div className="foter-phone-icon">
                   
                    </div>
                    <div>
                      <p>
                      Dhaka Education Board
                        Address: 13-14, Joynag Road,<br /> Bakshibazar, Dhaka-1211 <br />
                        Email : infobisedhaka@gmail.com
                      </p>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
};

export default Footer;