import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import { clickProcessing } from '../../store/actions'
import classes from './MainPage.module.css'

const MainPage = () => {

  const cards = useSelector(state => state.cards)
  const refreshGame = useSelector(state => state.refreshGame)

  const dispatch = useDispatch()

  const onClickHandler = (id) => {
    setTimeout(() => {
      dispatch(clickProcessing(id))
    }, 1000)
  }

  return (
    <div className={classes.Container}>
      <div className={classes.MainPage}>
        {
          cards.map((card, i) => {
              return (
                <Card 
                  key={Date.now() + i} 
                  url={card.src} 
                  id={card.id}
                  clickImage={onClickHandler}
                />
              )
          })          
        }
      </div>
    </div>
  )
}

export default MainPage
