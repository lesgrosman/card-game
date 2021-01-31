import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Card from '../Card/Card'
import { hideAllCards } from '../../store/actions'
import classes from './MainPage.module.css'

const MainPage = () => {

  const cards = useSelector(state => state.cards)
  const isOver = useSelector(state => state.isOver)
  const pairWasChecked = useSelector(state => state.pairWasChecked)
  const hideAll = useSelector(state => state.hideAll)
  
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOver) {
      history.push('/')
    }
  })

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideAllCards())
    }, 5000)
  }, [])

  return (
    <div className={classes.MainPage}>
      {
        cards ? cards.map((card, i) => {
            return (
              <Card 
                key={Date.now() + i} 
                url={card.src} 
                id={card.id}
                hideAll={hideAll}
              />
            )
        }) 
        : null         
      }
    </div>
  )
}

export default MainPage
