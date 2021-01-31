import { images } from '../images'


const clickProcessing = (id) => {
  return (dispatch, getState) => {
    const state = getState()

    if (state.firstCard === null) {
      dispatch(setFirstCard(id))
    } else {
      if (state.firstCard === id && (state.correctCards.length === (images.length / 2) - 1)) {
        dispatch(finishGame('victory'))
      } else if (state.firstCard === id) {
        dispatch(setFirstCard(null))
        dispatch(setCounter(id))
      } else {
        dispatch(onErrorHandler())
      }
    }
  }
}

const hideAllCards = () => {
  return {
    type: 'HIDE_ALL'
  }
}

const finishGame = (gameStatus) => {
  return {
    type: 'GAME_FINISHED',
    gameStatus
  }
}

const setFirstCard = (id) => {
  return {
    type: 'SET_FIRST_CARD',
    id
  }
}

const setCounter = (id) => {
  return {
    type: 'SET_COUNTER',
    id
  }
}

const setNewGame = () => {
  return {
    type: 'SET_NEW_GAME'
  }
}

const onErrorHandler = () => {
  return {
    type: 'ERROR_HANDLER'
  }
}

const disableAllCards = () => {
  return {
    type: 'DISABLE_ALL_CARDS'
  }
}

export {
  clickProcessing,
  hideAllCards,
  setNewGame,
  disableAllCards
}