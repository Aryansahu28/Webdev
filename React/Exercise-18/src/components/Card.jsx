import React from 'react'
import './Card.css'

const Card = ({card}) => {
  return (
    <div className='Card'>
      <div className="title">{card.title}</div>
      <div className="userid">{card.id}</div>
      <div className="description">{card.body}</div>
    </div>
  )
}

export default Card
