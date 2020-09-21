import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import imageClean from '../../assets/clean.jpg'
import { ComicsContext, ACTIONS } from '../../context/Comics'
import { ComicItem, RowItem, RowItemText } from './styles'

export interface Comic {
  characters: {
    available: number
    collectionURI: string
    items: string[]
    returned: number
  }
  collectedIssues: string[]
  collections: string[]
  creators: {
    available: number
    collectionURI: string
    items: Array<{
      name: string
      resourceURI: string
      role: string
    }>
    returned: number
  }
  dates: Array<{
    date: string
    type: string
  }>
  description: string
  diamondCode: string
  digitalId: number
  ean: string
  events: {
    available: number
    collectionURI: string
    items: string[]
    returned: number
  }
  format: string
  id: number
  images: string[]
  isbn: string
  issn: string
  issueNumber: number
  modified: string
  pageCount: number
  prices: Array<{
    type: string
    price: number
  }>
  resourceURI: number
  series: {
    resourceURI: string
    name: string
  }
  stories: {
    available: number
    collectionURI: string
    items: string[]
    returned: number
  }
  textObjects: string[]
  thumbnail: {
    path: string
    extension: string
  }
  title: string
  upc: string
  urls: Array<{
    type: string
    url: string
  }>
  variantDescription: string
  variants: string[]
}

export type Props = {
  comic: Comic
}

const ListComicsItem: React.FC<Props> = ({ comic }) => {
  const { dispatch } = useContext(ComicsContext)

  const handleSelectCharacters = () => {
    dispatch({
      type: ACTIONS.SELECT_COMIC,
      payload: { ...comic }
    })
  }

  return (
    <ComicItem>
      <Link
        onClick={handleSelectCharacters}
        to={`/issue/${comic.id}/${comic.title}`}
      >
        <RowItem>
          <img
            src={
              comic.images.length > 0
                ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                : imageClean
            }
            alt={comic.title}
          />
        </RowItem>
        <RowItemText>
          <h5>{comic.title}</h5>
          <p>{comic.creators.items[0]?.name}</p>
          <p>{comic.creators.items[0]?.role}</p>
        </RowItemText>
      </Link>
    </ComicItem>
  )
}

export default ListComicsItem
