import { shuffleImages, images } from '../images'


const clickProcessing = (id) => {
  return (dispatch, getState) => {
    const state = getState()

    if (state.firstCard === null) {
      dispatch(setFirstCard(id))
    } else {
      if (state.firstCard === id && (state.correctAnswersCounter === (images.length / 2) - 1)) {
        dispatch(setCards('victory'))
      } else if (state.firstCard === id) {
        dispatch(setFirstCard(null))
        dispatch(setCounter())
      } else {
        dispatch(setCards('lose'))
      }
    }
  }
}

const hideAll = () => {
  return {
    type: 'HIDE_ALL'
  }
}

const setCards = (gameStatus) => {
  const newCards = shuffleImages(images)
  return {
    type: 'SET_CARDS',
    newCards,
    gameStatus
  }
}

const setFirstCard = (id) => {
  return {
    type: 'SET_FIRST_CARD',
    id
  }
}

const setCounter = () => {
  return {
    type: 'SET_COUNTER'
  }
}

const setCounterToZero = () => {
  return {
    type: 'SET_COUNTER_TO_ZERO'
  }
}

const setNewGame = () => {
  return {
    type: 'SET_NEW_GAME'
  }
}

export {
  setCards,
  setFirstCard,
  setCounter,
  setCounterToZero,
  clickProcessing,
  hideAll,
  setNewGame
}