import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.imgUrl}></img>
      <div className='card-description'>
        <div className='card-location'>
          <img className='card-pointer' src=''></img>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h3 className='card-title'>{props.title}</h3>
        <h6 className='card-dates'>{props.startDate} - {props.endDate}</h6>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
