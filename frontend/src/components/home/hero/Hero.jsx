import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <>
       <section className='hero'>
            <div className='container'>
                <div className='row'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi perferendis reprehenderit ipsam vel consequatur rerum pariatur at beatae praesentium amet hic minima reiciendis cumque aliquid aut nihil nobis iure ut, earum totam cum accusamus quaerat. Mollitia, sapiente itaque. Consequatur culpa earum vel quidem? Vitae deleniti eum aliquid nulla provident?</p>
                    <div className="button">
                        <button className='primary-btn'>
                            GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                        <button className='primary-btn'>
                            VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                </div>
            </div>
       </section>
       <div className="margin"></div>
    </>
  )
}

export default Hero