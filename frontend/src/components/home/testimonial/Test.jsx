import React from 'react'
import Title from '../../common/title/Title'
import './style.css'

const Test = () => {
  return (
    <>
        <section className="testimonial padding">
            <div className="container">
                <Title subtitle="testimonial" title="Our Successful students"/>
                <div className="content grid2">
                    {
                        <div className="items shadow">
                            <div className="box flex">
                                <div className="img">
                                    <img src="" alt="" />
                                    <i className="fa fa-quote-left icon"></i>
                                </div>
                                <div className="name">
                                    <h2>{}</h2>
                                    <span>{}</span>
                                </div>
                            </div>
                            <p>{}</p>
                        </div>
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default Test