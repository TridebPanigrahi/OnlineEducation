import React from "react";
import Title from "../../common/title/Title";
import "./style.css";
import { testimonial } from "../../common/dummydata/dummyData";

const Test = () => {
  return (
    <>
      <section className="testimonal padding">
        <div className="container">
          <Title subtitle="testimonial" title="Our Successful students" />
          <div className="content grid2">
            {testimonial.slice(0,3).map((data) => (
              <div className="items shadow">
                <div className="box flex">
                  <div className="img" key={data.id}>
                    <img src={data.cover} alt="" />
                    <i className="fa fa-quote-left icon"></i>
                  </div>
                  <div className="name">
                    <h2>{data.name}</h2>
                    <span>{data.desg}</span>
                  </div>
                </div>
                <p>{data.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Test;
