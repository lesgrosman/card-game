import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Card from '../Card/Card'
import { clickProcessing, hideAll } from '../../store/actions'
import classes from './MainPage.module.css'

const MainPage = () => {

  const cards = useSelector(state => state.cards)
  const isOver = useSelector(state => state.isOver)
  
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOver) {
      history.push('/')
    }
  })

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideAll())
    }, 5000)
  }, [])

  const onClickHandler = (id) => {
    setTimeout(() => {
      dispatch(clickProcessing(id))
    }, 1000)
  }



  return (
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
  )
}

export default MainPage
