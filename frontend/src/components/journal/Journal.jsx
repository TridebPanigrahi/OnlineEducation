import React from 'react'
import Back from '../common/back/Back'
import JournalCard from './JournalCard'
import './journal.css'

const Journal = () => {
  return (
    <>
        <Back title="Blog Posts"/>
        <section className="blog padding">
          <div className="container grid2">
            <JournalCard/>
          </div>
        </section>
    </>
  )
}

export default Journal