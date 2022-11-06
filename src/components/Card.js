import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.item.imageUrl} alt="location image" className='card-image'></img>
      <div className='card-description'>
        <div className='card-location'>
          <h3>{props.item.location}</h3>
          <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
        </div>
        <h1 className='card-title'>{props.item.title}</h1>
        <h4 className='card-dates'>{props.item.startDate} - {props.item.endDate}</h4>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}
