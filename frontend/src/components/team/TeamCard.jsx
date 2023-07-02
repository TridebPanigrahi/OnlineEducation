import React from "react";
import { team } from "../common/dummydata/dummyData";

const TeamCard = () => {
  return (
    <>
      {team.map((data) => {
        return (
          <div className="items shadow" key={data.id}>
            <div className="img">
              <img src={data.cover} alt="" />
              <div className="overlay">
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                <i className="fab fa-tiktok icon"></i>
              </div>
            </div>
            <div className="details">
              <h2>{data.name}</h2>
              <p>{data.work}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TeamCard;
