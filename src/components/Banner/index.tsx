import React from 'react'
import Carousel from 'nuka-carousel'

import { Container, ImageCarrousel } from './styles'

const banners = [
  {
    name: 'banner-1',
    url: 'https://i.annihil.us/u/prod/marvel/i/mg/6/30/5f63c880710ba.jpg'
  },
  {
    name: 'banner-2',
    url: 'https://i.annihil.us/u/prod/marvel/i/mg/f/90/5f6591bc5cdfa.jpg'
  },
  {
    name: 'banner-1',
    url: 'https://i.annihil.us/u/prod/marvel/i/mg/7/70/5f65927b7c9e4.jpg'
  },
  {
    name: 'banner-1',
    url: 'https://i.annihil.us/u/prod/marvel/i/mg/1/50/5f6591077c667.jpg'
  }
]

const Banner: React.FC = () => {
  return (
    <Container className="carousel-wrapper">
      <Carousel edgeEasing="easeOutCirc" autoplay>
        {banners.map(banner => (
          <ImageCarrousel
            key={banner.name}
            alt={banner.name}
            src={banner.url}
          />
        ))}
      </Carousel>
    </Container>
  )
}

export default Banner
