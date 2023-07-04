import React from "react";
import Title from "../common/title/Title";
import PriceCard from '../pricing/PriceCard';

const Hpricing = () => {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="our pricing" title="Pricing & Packages" />
        <div className="price container grid">
            <PriceCard/>
        </div>
      </section>
    </>
  );
};

export default Hpricing;
