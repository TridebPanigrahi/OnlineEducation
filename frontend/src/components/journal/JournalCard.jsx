import React from "react";
import "./journal.css";
import { blog } from "../common/dummydata/dummyData";

const JournalCard = () => {
  return (
    <>
      {blog.map((data) => {
        return (
          <div className="items shadow">
            <div className="img">
              <img src={data.cover} alt="" />
            </div>
            <div className="text">
              <div className="admin flexSB">
                <span>
                  <i className="fa fa-user"></i>
                  <label htmlFor="">{data.type}</label>
                </span>
                <span>
                  <i className="fa fa-calendar-alt"></i>
                  <label htmlFor="">{data.date}</label>
                </span>
                <span>
                  <i className="fa fa-comments"></i>
                  <label htmlFor="">{data.com}</label>
                </span>
              </div>
              <h1>{data.agenda}</h1>
              <p>{data.desc}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JournalCard;
