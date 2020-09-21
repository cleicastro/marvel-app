/* eslint-disable indent */
import React, { useContext, useMemo } from 'react'

import InfiniteScroll from 'react-infinite-scroller'

import Banner from '../../components/Banner'
import ListComicsItem from '../../components/ListComicsItem'
import Skeleton from '../../components/Skeleton'
import { ComicsContext } from '../../context/Comics'
import { useRequestComics } from '../../hooks/requestComics'
import { usePaginationComics } from '../../hooks/paginationComics'

import { Container, Main, Cards, TitleGroup, Wrapper } from './styles'

const Home: React.FC = () => {
  const {
    state: { comics, pagination }
  } = useContext(ComicsContext)
  const limit = 10
  const requestComics = useRequestComics(limit)
  const nextPage = usePaginationComics(limit, pagination.offset)

  if (comics.length === 0) {
    requestComics()
  }

  const handlePagination = async () => {
    if (pagination.nextPage > 0) {
      nextPage()
    }
  }

  return (
    <Container>
      <Banner />
      <Main>
        <Cards>
          <InfiniteScroll
            useWindow={true}
            pageStart={0}
            hasMore={pagination.nextPage < pagination.total}
            loadMore={handlePagination}
            loader={
              <Wrapper key={0}>
                {[...Array(limit / 2)].map((elementInArray, index) => (
                  <Skeleton key={index} />
                ))}
              </Wrapper>
            }
          >
            <TitleGroup>SEPTEMBER 16: NEW RELEASES</TitleGroup>
            <Wrapper>
              {comics.length > 0
                ? comics.map((comic: any, index: number) => (
                    <ListComicsItem comic={comic} key={index} />
                  ))
                : [...Array(limit)].map((elementInArray, index) => (
                    <Skeleton key={index} />
                  ))}
            </Wrapper>
          </InfiniteScroll>
        </Cards>
      </Main>
    </Container>
  )
}

export default Home
