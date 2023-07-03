import React from "react";
import Title from "../common/title/Title";
import AboutBgIMG from "../assets/young-pretty-student-woman-with-backpack-exercise-books-isolated-white-wall-min.jpg"
import { homeAbout } from "../common/dummydata/dummyData";
import "./about.css";
import AWrapper from "./AWrapper";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={AboutBgIMG} alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((data) => {
                return (
                  <div className="item flexSB" key={data.id}>
                    <div className="img">
                      {/* <img src={data.cover} alt="" /> */}
                      <i>{data.cover}</i>
                    </div>
                    <div className="text">
                      <h2>{data.title}</h2>
                      <p>{data.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper/>
    </>
  );
};

export default AboutCard;
