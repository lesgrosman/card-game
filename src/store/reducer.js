import {shuffleImages, images} from '../images'

const initialState = {
  cards: shuffleImages(images),
  firstCard: null,
  hideAll: false,
  isOver: false,
  gameStatus: 'start',
  correctCards: [],
  pairWasChecked: true,
  cardsAreDisable: false
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GAME_FINISHED':
      return {
        ...state,
        gameStatus: action.gameStatus,
        isOver: true
      }
    case 'SET_FIRST_CARD':
      return {
        ...state, firstCard: action.id,
        correctPair: null   
      }
    case 'SET_COUNTER':
      return {
        ...state, 
        correctCards: [...state.correctCards, action.id],
        pairWasChecked: !state.pairWasChecked   
      }
    case 'HIDE_ALL':
      return {
        ...state,
        hideAll: true
      }
    case 'SET_NEW_GAME':
      return {
        ...state,
        cards: shuffleImages(images),
        firstCard: null,
        hideAll: false,
        isOver: false,
        correctCards: []
      }
    case 'ERROR_HANDLER':
      return {
        ...state,
        firstCard: null,
        pairWasChecked: !state.pairWasChecked   
      }
    case 'DISABLE_ALL_CARDS':
      return {
        ...state,
        cardsAreDisable: !state.cardsAreDisable
      }
    default:
      return state
  }
}

export default reducer