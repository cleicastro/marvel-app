import React from 'react'
import Marvel from './services/marvel'

describe('GET@/comics', () => {
  it('should request and return comics with a status of 200', async () => {
    const result = await Marvel.getComics({ limit: 10 })

    expect(result.status).toEqual(200)
    expect(result.data.data.results.length).toEqual(10)
  })
})
