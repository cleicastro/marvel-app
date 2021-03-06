import { useContext } from 'react'
import marvel from '../services/marvel'
import { ComicsContext, ACTIONS } from '../context/Comics'

export const useRequestComics = (limit: number) => {
  const { dispatch } = useContext(ComicsContext)
  async function request() {
    const result = await marvel.getComics({ limit, offset: 0 })
    try {
      dispatch({
        type: ACTIONS.COMICS,
        payload: result.data.data
      })
    } catch (error) {
      console.log(error)
    }
  }
  return request
}
