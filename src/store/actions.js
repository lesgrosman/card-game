import { shuffleImages, images } from '../images'


const clickProcessing = (id) => {
  return (dispatch, getState) => {
    const state = getState()

    if (state.firstCard === null) {
      dispatch(setFirstCard(id))
    } else {
      if (state.firstCard === id && (state.correctAnswersCounter === (state.cards.length / 2) - 1)) {
        console.log('VICTORY')
        dispatch(setCards())
      } else if (state.firstCard === id) {
        dispatch(setFirstCard(null))
        dispatch(setCounter())
        console.log('Correct. Continue')
      } else {
        dispatch(setCards())
        console.log('INCORRECT. Rerender')
      }
    }
  }
}

const setCards = () => {
  const newCards = shuffleImages(images)
  return {
    type: 'SET_CARDS',
    newCards
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

export {
  setCards,
  setFirstCard,
  setCounter,
  setCounterToZero,
  clickProcessing
}