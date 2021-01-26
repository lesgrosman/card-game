import {shuffleImages, images} from '../images'

const initialState = {
  cards: shuffleImages(images),
  firstCard: null,
  correctAnswersCounter: 0,
  hideAll: false,
  isOver: false,
  gameStatus: 'start'
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        cards: action.newCards,
        firstCard: null,
        correctAnswersCounter: 0,
        hideAll: false,
        gameStatus: action.gameStatus,
        isOver: true
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
    case 'HIDE_ALL':
      return {
        ...state,
        hideAll: true
      }
    case 'SET_NEW_GAME':
      return {
        ...state,
        isOver: false,
        hideAll: false
      }
    default:
      return state
  }
}

export default reducer