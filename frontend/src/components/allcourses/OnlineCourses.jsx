import React from 'react'
import Title from '../common/title/Title'
import { onlineCourse } from '../common/dummydata/dummyData'

const OnlineCourses = () => {
  return (
    <>
        <section className="online">
            <div className="container">
                <Title subtitle="COURSES" title="Browse Our Online Courses"/>
                <div className="content grid3">
                    {
                        onlineCourse.map((data)=>{
                            return(
                                <div className="box" key={data.id}>
                                    <div className="img">
                                        <img src={data.cover} alt="" />
                                    </div>
                                    <h1>{data.sub}</h1>
                                    <span>{data.val}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default OnlineCourses