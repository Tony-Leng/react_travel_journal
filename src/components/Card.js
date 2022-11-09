import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.imageUrl} alt="location image" className='card-image'></img>
      <div className='card-description'>
        <div className='card-location'>
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
        </div>
        <h1 className='card-title'>{props.title}</h1>
        <h4 className='card-dates'>{props.startDate} - {props.endDate}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
