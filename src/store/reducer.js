import {shuffleImages, images} from '../images'

const initialState = {
  cards: shuffleImages(images),
  firstCard: null,
  correctAnswersCounter: 0,
  refreshGame: false
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.newCards,
        firstCard: null,
        correctAnswersCounter: 0,
        refreshGame: !state.refreshGame
      }
    case 'SET_FIRST_CARD':
      return {
        ...state, firstCard: action.id
      }
    case 'SET_COUNTER':
      return {
        ...state, 
        correctAnswersCounter: state.correctAnswersCounter + 1
      }
    case 'SET_COUNTER_TO_ZERO':
      return {
        ...state,
        correctAnswersCounter: 0
      }
    default:
      return state
  }
}

export default reducer