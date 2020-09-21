import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  height: 70vh;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 80%,
    rgba(0, 0, 0, 0) 0%
  );
`
export const ImageCarrousel = styled.img`
  width: 100%;
  opacity: 0.4;
  object-fit: cover;
  height: auto !important;
  background-color: transparent !important;
  -webkit-mask-box-image: none !important;
`
