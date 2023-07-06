import React from 'react'
import './footer.css'
import { blog } from '../dummydata/dummyData'

const Footer = () => {
  return (
    <>
        <section className="newletter">
            <div className="container flexSB">
                <div className="left row">
                    <h1>Newsletter -Stay tune and get the letest update</h1>
                    <span>far far away, behind the world mountains</span>
                </div>
                <div className="right row">
                    <input type="text" placeholder='Enter email address' />
                    <i className="fa fa-paper-plane"></i>
                </div>
            </div>
        </section>
        <footer>
            <div className="container padding">
                <div className="box logo">
                    <h1>MYSCHOOL</h1>
                    <span>online education & learing</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, est.</p>
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                </div>
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box link">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="box">
                    <h3>Recent Post</h3>
                    {
                        blog.slice(0,3).map((data)=>{
                            return(
                                <div className="items flexSB">
                                <div className="img">
                                    <img src={data.cover} alt="" />
                                </div>
                                <div className="text">
                                    <span>
                                        <i className="fa fa-user"></i>
                                        <label htmlFor="">{data.type}</label>
                                    </span>
                                    <span>
                                        <i className="fa fa-calendar-alt"></i>
                                        <label htmlFor="">{data.date}</label>
                                    </span>
                                    <h4>{data.agenda}</h4>
                                </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="box last">
                    <h3>Have a Questions?</h3>
                    <ul>
                        <li>
                            <i className="fa fa-map"></i>
                            203 Fake ST.Mount View , san francisio california , USA
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            +91-8249713049
                        </li>
                        <li>
                            <i className="fa fa-paper-plane"></i>
                            panigrahitrideb1@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="legal">
            <p>Copyright @2023 All rights reserved</p>
        </div>
    </>
  )
}

export default Footer