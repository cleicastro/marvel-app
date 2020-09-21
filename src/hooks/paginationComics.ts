import React, { useContext } from 'react'
import { ComicsContext, ACTIONS } from '../context/Comics'
import marvel from '../services/marvel'

export const usePaginationComics = () => {
  const { dispatch } = useContext(ComicsContext)

  async function nextPage(limit: number, offset: number) {
    const result = await marvel.getComics({ limit, offset })
    dispatch({
      type: ACTIONS.COMICS,
      payload: result.data.data
    })
  }
  return nextPage
}
