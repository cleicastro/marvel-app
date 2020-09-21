import React, { useReducer, createContext } from 'react'

export const ACTIONS = {
  COMICS: 'LIST_COMICS',
  SELECT_COMIC: 'SELECT_COMIC',
  SEARCH_CHARACTERS: 'SEARCH_CHARACTERS',
  CHARACTERS: 'LIST_CHARACTERS'
}

const INITIAL_STATE = {
  comics: [],
  activeComic: {},
  pagination: {
    count: 0,
    offset: 0,
    nextPage: 1,
    total: 0
  },
  paramsCharacters: '',
  characters: []
}

function comicsReduce(state, action) {
  switch (action.type) {
    case ACTIONS.COMICS:
      console.log(action.payload)
      return {
        ...state,
        comics: [...state.comics, ...action.payload.results],
        pagination: {
          count: action.payload.count,
          offset: action.payload.offset,
          nextPage: action.payload.offset + 1,
          total: action.payload.total
        }
      }
    case ACTIONS.SELECT_COMIC:
      return {
        ...state,
        activeComic: action.payload
      }
    case ACTIONS.CHARACTERS:
      return {
        ...state,
        characters: action.payload
      }
    case ACTIONS.SEARCH_CHARACTERS:
      return {
        ...state,
        paramsCharacters: action.payload
      }
    default:
      return state
  }
}

export const ComicsContext = createContext()

const ComicsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(comicsReduce, INITIAL_STATE)
  return (
    <ComicsContext.Provider value={{ state, dispatch }}>
      {children}
    </ComicsContext.Provider>
  )
}

export default ComicsProvider
