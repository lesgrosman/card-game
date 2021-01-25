import React, { useState } from 'react'
import classes from './Card.module.css'

const Card = ({url, id, clickImage}) => {

  const [clicked, setClicked] = useState(false)

  const onClickHandler = () => {
    setClicked(true)
    clickImage(id)
  }

  const cls = [classes.Overlay]

  if (clicked) {
    cls.push(classes.clicked)
  }

  return (
    <div className={classes.Card}>
      <img src={url} alt="imgas"/>
      <div 
        className={cls.join(' ')} 
        onClick={onClickHandler}
      >
      </div>
    </div>

  )
}

export default Card