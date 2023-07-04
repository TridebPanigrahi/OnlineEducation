import React from 'react'
import { price } from '../common/dummydata/dummyData'

const PriceCard = () => {
  return (
    <>
        {
            price.map((data)=>(
                <div className="items shadow" key={data.id}>
                <h4>{data.plan}</h4>
                <h1>
                    <span>$</span>
                    {data.cost}
                </h1>
                <p>{data.desc}</p>
                <button className="outline-btn">
                    GET STARTED
                </button>
            </div>
            ))
        }
    </>
  )
}

export default PriceCard