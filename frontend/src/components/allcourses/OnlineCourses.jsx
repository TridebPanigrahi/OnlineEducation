import React from 'react'
import Title from '../common/title/Title'

const OnlineCourses = () => {
  return (
    <>
        <section className="online">
            <div className="container">
                <Title subtitle="COURSES" title="Browse Our Online Courses"/>
                <div className="content grid3">
                    {
                        <div className="box">
                            <div className="img">
                                <img src="" alt="" />
                                <img src="" alt="" className="show" />
                            </div>
                            <h1>{}</h1>
                            <span>{}</span>
                        </div>
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCourses