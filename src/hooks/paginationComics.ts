import React, { useContext } from 'react'
import { ComicsContext, ACTIONS } from '../context/Comics'
import marvel from '../services/marvel'

export const usePaginationComics = (limit: number, offset: number) => {
  const { dispatch } = useContext(ComicsContext)

  async function nextPage() {
    const result = await marvel.getComics({ limit, offset: offset + 1 })
    dispatch({
      type: ACTIONS.COMICS,
      payload: result.data.data
    })
  }
  return nextPage
}
