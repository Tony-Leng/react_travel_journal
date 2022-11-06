import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
      <img src={props.item.imageUrl}></img>
      <div className='card-description'>
        <div className='card-location'>
          <img className='card-pointer' src=''></img>
          <a href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
        </div>
        <h3 className='card-title'>{props.item.title}</h3>
        <h6 className='card-dates'>{props.item.startDate} - {props.item.endDate}</h6>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}
