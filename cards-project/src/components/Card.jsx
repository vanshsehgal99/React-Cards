import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        
        <div>
          <div className="top">
          <img src={props.logo} alt="" />
          <button>Save </button>
        </div>

        <div className="center">
          <h3> {props.companyname} <span> {props.dateposting} </span></h3>
          <h2> {props.jobrle} </h2>
          <div className='tag'>
            <h4> {props.tagone} </h4>
            <h4> {props.tagtwo} </h4>
          </div>
        </div>
        </div>

        <div className="bottom">
          <div>
              <h3> {props.pmt} </h3>
              <p> {props.lctn} </p>
          </div>
            <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card