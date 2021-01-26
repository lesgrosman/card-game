import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import classes from './Card.module.css'

const Card = ({url, id, clickImage}) => {

  const [clicked, setClicked] = useState(false)
  const hideAll = useSelector(state => state.hideAll)

  const onClickHandler = () => {
    setClicked(true)
    clickImage(id)
  }

  const cls = [classes.Overlay]

  if (clicked) {
    cls.pop()
    cls.push(classes.clicked)
  }

  if (hideAll) {
    cls.push(classes.hide)
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