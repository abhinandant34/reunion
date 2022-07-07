import React from 'react'
import './Card.css'

export default function Card({img,rent,name,location,beds,bathroom,size}) {
  return (
    <div className='card'>
        <div className='card-img'>
            <img className='card-image' src={img}></img>
        </div>
        <div className='card-description'>
            <div className='card-price'>{rent} /month</div>
            <div className='card-name'>{name}</div>
            <div className='card-address'>{location}</div>
            <div className='card-info'>
                <div>{beds}</div>
                <div>{bathroom}</div>
                <div> {size}</div>
            </div>

        </div>
        
    </div>
  )
}
