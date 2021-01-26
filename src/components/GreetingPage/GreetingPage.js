import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setNewGame } from '../../store/actions'
import classes from './GreetingPage.module.css'

const GreetingPage = () => {

  const gameStatus = useSelector(state => state.gameStatus)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setNewGame())
  })

  const setTitle = () => {
    switch (gameStatus) {
      case 'victory':
        return 'Victory'
      case 'lose':
        return 'Try again'
      default:
        return 'Welcome to the card game'
    }
  }


  const greeting = (
    <>
      <h1>{setTitle()}</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <Link to="/game">Start Game</Link>
    </>

  )
  return (
    <div className={classes.GreetingPage}>
      {greeting}
    </div>
  )

}

export default GreetingPage