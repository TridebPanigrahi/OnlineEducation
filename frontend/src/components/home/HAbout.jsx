import React from "react";
import Title from "../common/title/Title";
import { coursesCard } from "../common/dummydata/dummyData";
import OnlineCourses from "../allcourses/OnlineCourses";

const HAbout = () => {
  return (
    <>
      <section className="homeAbout">
        <div className="container">
            <Title subtitle="Our Courses" title="Explore Our Popular Online Courses"/>
          <div className="coursesCard">
            <div className="grid2">
              {coursesCard.slice(0, 3).map((data) => {
                return (
                  <div className="items">
                    <div className="content flex">
                      <div className="left">
                        <div className="img">
                          <i>{data.cover}</i>
                        </div>
                      </div>
                      <div className="text">
                        <h1>{data.coursesName}</h1>
                        <div className="rate">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <label htmlFor="">(5.0)</label>
                        </div>
                        <div className="details">
                          {data.courTeacher.map((details) => {
                            return (
                              <>
                                <div className="box">
                                  <div className="dimg">
                                    <img src={details.dcover} alt="" />
                                  </div>
                                  <div className="para">
                                    <h4>{details.name}</h4>
                                  </div>
                                </div>
                                <span>{details.totalTime}</span>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <h3>
                        {data.priceAll} / {data.pricePer}
                      </h3>
                    </div>
                    <button className="outline-btn">ENROLL NOW !</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <OnlineCourses/>
    </>
  );
};

export default HAbout;
