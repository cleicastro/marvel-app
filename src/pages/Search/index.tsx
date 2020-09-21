import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ComicsContext, ACTIONS } from '../../context/Comics'
import { Comic } from '../../components/ListComicsItem'
import marvel from '../../services/marvel'
import imageClean from '../../assets/clean.jpg'

import {
  Container,
  Main,
  ListCards,
  CardSearch,
  CardSearchWrapper,
  CardSearchBody,
  CardSearchFooter
} from './styles'

const Search: React.FC = () => {
  const {
    state: { characters }
  } = useContext(ComicsContext)

  return (
    <Container>
      <Main>
        {characters.length === 0 && (
          <h1 style={{ textAlign: 'center', marginTop: 150 }}>
            Search a character
          </h1>
        )}
        {characters.map((character: Comic, index: number) => (
          <ListCards key={index}>
            <CardSearch>
              <CardSearchWrapper>
                <a href={character.urls[0].url} target="_blanck">
                  <img
                    src={
                      character.images.length > 0
                        ? `${character.thumbnail.path}.${character.thumbnail.extension}`
                        : imageClean
                    }
                    alt={character.title}
                  />
                </a>
                <CardSearchBody>
                  <a href={character.urls[0].url} target="_blanck">
                    Comic
                  </a>
                  <a href={character.urls[0].url} target="_blanck">
                    <h2> {character.title} </h2>
                  </a>
                  <CardSearchFooter>
                    <p>${character.prices[0].price.toFixed(2)}</p>
                  </CardSearchFooter>
                </CardSearchBody>
              </CardSearchWrapper>
            </CardSearch>
          </ListCards>
        ))}
      </Main>
    </Container>
  )
}

export default Search
