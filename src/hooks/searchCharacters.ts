import { useContext } from 'react'
import marvel from '../services/marvel'
import { ComicsContext, ACTIONS } from '../context/Comics'

export const useRequestCharacters = () => {
  const { dispatch } = useContext(ComicsContext)
  async function request(params: any) {
    dispatch({
      type: ACTIONS.CHARACTERS,
      payload: []
    })
    if (params.length > 1) {
      try {
        const result = await marvel.getCharacters(params)
        const { id } = result.data.data.results[0]
        console.log(id)

        if (id) {
          const resultComics = await marvel.getComics({
            limit: 100,
            offset: 0,
            characters: id
          })
          dispatch({
            type: ACTIONS.CHARACTERS,
            payload: resultComics.data.data.results
          })
        }
      } catch (error) {
        console.log(error)
        alert('sorry for the inconvenience')
      }
    }
  }
  return request
}
