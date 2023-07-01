import React from 'react'
import { awrapper } from '../common/dummydata/dummyData'

const AWrapper = () => {
  return (
    <>
    <section className="awrapper">
        <div className="container grid">
            {
                awrapper.map((data)=>(
                    <div className="box flex" key={data.id}>
                        <div className="img">
                            <i>{data.cover}</i>
                        </div>
                        <div className="text">
                            <h1>{data.result}</h1>
                            <h3>{data.title}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
    </>
  )
}

export default AWrapper