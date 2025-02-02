import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qual section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Co-Curricular Journey</span>

      <div className="qual__container container">
        <div className="qual__tabs">
          <div
            className={
              toggleState === 1
                ? "qual__button button--flex qual__active"
                : "qual__button button--flex"
            }
            onClick={()=>{
                toggleTab(1)
            }}
          >
            <i className="uil uil-graduation-cap qual__icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qual__button button--flex qual__active"
                : "qual__button button--flex"
            }
            onClick={()=>{
                toggleTab(2);
            }}
          >
            <i className="uil uil-award qual__icon"></i>
            Certifications
          </div>
        </div>

        <div className="qual__sections">
          <div
            className={
              toggleState === 1
                ? "qual__content qual__content-active"
                : "qual__content"
            }
          >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                  B.E., Computer Science and Engineering
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                  S.N.S. College of Engineering
                </span>
                <div className="qual__calender">
                  <i className="uil uil-notes grade"></i>
                  8.5 CGPA
                </div>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2020 - 2024
                </div>
                
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>

              <div>
                <h3 className="qual__title">
                  Higher Secondary Schooling (HSC)
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                  Government Higher Secondary School
                </span>
                
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2020
                </div>
              </div>
            </div>

            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                   Secondary Schooling (SSLC)
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>
                  Nactional Matriculation Higher Secondary School
                </span>
                
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017 - 2018
                </div>
              </div>

              <div>
                <span className="qual__rounder"></span>
                {/* <span className="qual__line"></span> */}
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className={
              toggleState === 2
                ? "qual__content qual__content-active"
                : "qual__content"
            }
            
            >
            <div className="qual__data">
              <div>
                <h3 className="qual__title">
                Linux - The Complete Developer's Guide 2023
                </h3>
                <span className="qual__subtitle">
                <i className="uil uil-university grade"></i>LINUC FOUNDATION</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
            <div></div>
              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
              <div>
                <h3 className="qual__title">
                React - The Complete Guide (2023 Edition)
                </h3>
                <span className="qual__subtitle"><i className="uil uil-university grade"></i>Priepinsta</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>

              
            </div>

            <div className="qual__data">
              

              <div>
                <h3 className="qual__title">
                  Cloud Computing (3rd Edition)
                </h3>
                <span className="qual__subtitle"><i className="uil uil-university grade"></i>NPTL</span>
                <div className="qual__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>
       

              <div>
                <span className="qual__rounder"></span>
                <span className="qual__line"></span>
              </div>
            </div>

            <div className="qual__data">
              <div></div>

              <div>
                <span className="qual__rounder"></span>
                {/* <span className="qual__line"></span> */}
              </div>

  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
