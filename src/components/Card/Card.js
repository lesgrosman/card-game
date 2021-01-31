import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { disableAllCards, clickProcessing } from '../../store/actions'
import classes from './Card.module.css'

const Card = ({ url, id, hideAll }) => {

  const [clicked, setClicked] = useState(false)
  const correctCards = useSelector(state => state.correctCards)
  const cardsAreDisable = useSelector(state => state.cardsAreDisable)

  const dispatch = useDispatch()


  const onClickHandler = () => {
    setClicked(true)

    dispatch(disableAllCards())

    setTimeout(() => {
      dispatch(disableAllCards())
      dispatch(clickProcessing(id))
    }, 1000)   
  }

  const cls = [classes.Overlay]

  if (hideAll) {
    cls.push(classes.hide)
  }

  if (correctCards.includes(id) || clicked) {
    cls.pop()
    cls.push(classes.clicked)
  }

  if (cardsAreDisable) {
    cls.push(classes.disabled)
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