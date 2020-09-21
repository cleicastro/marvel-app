import React, { useContext, useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom'

import imageClean from '../../assets/clean.jpg'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ComicsContext } from '../../context/Comics'

import {
  Container,
  BacgroundWrap,
  ItemBacground,
  Main,
  DetailTopBar,
  ComicItem,
  RowItem,
  ItemInfo,
  ItemText,
  ItemMeta,
  CreatorList,
  ItemDescrible,
  MoreDetails,
  GridContainer,
  GridRow,
  DetailWrap,
  DetailExtended,
  DetailExtendedItem,
  DetailInfo
} from './styles'

interface Creaters {
  name: string
  resourceURI: string
  role: string
}

const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' }

const Details = () => {
  window.scrollTo(0, 0)
  const {
    state: { activeComic }
  } = useContext(ComicsContext)
  const history = useHistory()

  useEffect(() => {
    if (!activeComic.id) {
      history.goBack()
    }
  }, [])

  const handleGoBack = () => history.goBack()
  return (
    <>
      <Header />
      <Container>
        <DetailTopBar>
          <button type="button" onClick={handleGoBack}>
            <FaArrowLeft style={{ fill: '#f00' }} /> Back To Comics
          </button>
        </DetailTopBar>

        <BacgroundWrap>
          <ItemBacground>
            <img
              src={`${activeComic.thumbnail.path}.${activeComic.thumbnail.extension}`}
              width="100%"
              height="537"
            />
          </ItemBacground>
        </BacgroundWrap>

        <Main>
          <ItemInfo>
            <ComicItem>
              <RowItem>
                <img
                  src={
                    activeComic.images.length > 0
                      ? `${activeComic.thumbnail.path}.${activeComic.thumbnail.extension}`
                      : imageClean
                  }
                  alt={activeComic.title}
                  width="550"
                  height="845"
                />
              </RowItem>
            </ComicItem>
            <ItemText>
              <h1>{activeComic.title}</h1>
              <ItemMeta>
                <strong>Published:</strong>
                <div>
                  {Intl.DateTimeFormat('en-US', optionsDate).format(
                    new Date(activeComic.dates[0].date)
                  )}
                </div>
                <CreatorList>
                  {activeComic.creators.items.map(
                    (item: Creaters, index: number) => {
                      switch (item.role) {
                        case 'writer':
                          return (
                            <li key={index}>
                              <strong>Writer:</strong>
                              <div>{item.name}</div>
                            </li>
                          )
                        case 'penciler (cover)':
                          return (
                            <li key={index}>
                              <strong>Penciler:</strong>
                              <div>{item.name}</div>
                            </li>
                          )
                        case 'editor':
                          return (
                            <li key={index}>
                              <strong>Editor:</strong>
                              <div>{item.name}</div>
                            </li>
                          )
                        default:
                          break
                      }
                    }
                  )}
                </CreatorList>
              </ItemMeta>
              <ItemDescrible>
                <p>{activeComic.description}</p>
              </ItemDescrible>
            </ItemText>
          </ItemInfo>
        </Main>

        <MoreDetails>
          <GridContainer>
            <GridRow>
              <h2>More Details</h2>
            </GridRow>
            <GridRow>
              <DetailExtended>
                <DetailExtendedItem>
                  <DetailWrap>
                    <h3>EXTENDED CREDITS AND INFO</h3>
                    <DetailInfo>
                      <li>
                        <strong>Imprint:</strong> Marvel Universe
                      </li>
                      <li>
                        <strong>Rating:</strong> Rated T+
                      </li>
                      <li>
                        <strong>Format:</strong> {activeComic.format}
                      </li>
                      <li>
                        <strong>Price:</strong> $
                        {activeComic.prices[0].price.toFixed(2)}
                      </li>
                      <li>
                        <strong>UPC:</strong> {activeComic.upc}
                      </li>
                      <li>
                        <strong>FOC Date:</strong>{' '}
                        {activeComic.dates[1].date[0] !== '-' &&
                          Intl.DateTimeFormat('en-US', optionsDate).format(
                            new Date(activeComic.dates[1].date)
                          )}
                      </li>
                    </DetailInfo>
                  </DetailWrap>
                </DetailExtendedItem>
              </DetailExtended>

              <DetailExtended>
                <DetailExtendedItem>
                  <DetailWrap>
                    <h3>STORIES</h3>
                    <DetailInfo>
                      {activeComic.creators.items.map(
                        (item: Creaters, index: number) => (
                          <li key={index}>
                            <strong style={{ textTransform: 'capitalize' }}>
                              {item.role}:
                            </strong>{' '}
                            <Link to={item.resourceURI} target="_blank">
                              {item.name}
                            </Link>
                          </li>
                        )
                      )}
                    </DetailInfo>
                  </DetailWrap>
                </DetailExtendedItem>
              </DetailExtended>

              <DetailExtended>
                <DetailExtendedItem>
                  <DetailWrap>
                    <h3>Extended credits and info</h3>
                    <DetailInfo>
                      {activeComic.creators.items.map(
                        (item: Creaters, index: number) => {
                          switch (item.role) {
                            case 'writer':
                              return (
                                <li key={index}>
                                  <strong>Writer:</strong>{' '}
                                  <Link to={item.resourceURI}>{item.name}</Link>
                                </li>
                              )
                            case 'penciler (cover)':
                              return (
                                <li key={index}>
                                  <strong>Penciler:</strong>{' '}
                                  <Link to={item.resourceURI}>{item.name}</Link>
                                </li>
                              )
                            case 'editor':
                              return (
                                <li key={index}>
                                  <strong>Editor:</strong>{' '}
                                  <Link to={item.resourceURI}>{item.name}</Link>
                                </li>
                              )
                            default:
                              break
                          }
                        }
                      )}
                    </DetailInfo>
                  </DetailWrap>
                </DetailExtendedItem>
              </DetailExtended>
            </GridRow>
          </GridContainer>
        </MoreDetails>
      </Container>
      <Footer />
    </>
  )
}

export default Details
