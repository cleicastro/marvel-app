import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 97vh;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  background: var(--black);
`
export const DetailTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #151515;
  color: var(--white);
  text-transform: uppercase;
  width: 100%;
  height: 45px;
  border-width: 0;
  position: relative;

  button {
    color: var(--white);
    background: none;
    border: none;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px;
    margin-left: 10px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: rgb(255, 255, 255, 0.2);
    }
  }
`

export const BacgroundWrap = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 601px) {
    display: none;
  }
  @media (min-width: 839px) {
    display: block;
  }
`
export const ItemBacground = styled.div`
  max-width: 100%;
  margin: 0 auto;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  opacity: 0.2;

  img {
    width: 110% !important;
    margin-right: -5%;
    margin-top: -30px;
    filter: blur(1rem);
    height: auto !important;
    background-color: transparent !important;
    -webkit-mask-box-image: none !important;
  }
`
export const Main = styled.section`
  flex: 1;
  width: 70vw;
  justify-content: center;
  margin: 0 auto;
  padding: 8px;
  z-index: 1;

  @media (max-width: 839px) {
    width: 100vw;
  }
`

export const ItemInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: initial;
`
export const ComicItem = styled.div`
  display: block;
  margin: 0 0 30px 0 !important;
  flex: 1;
  max-width: 216px;
  width: 22.9%;
  min-width: 146px;

  @media (min-width: 839px) {
    padding: 0 50px 50px 0;
  }

  @media (min-width: 601px) {
    flex: 1;
    padding: 0 30px 30px 0;
  }

  @media only screen and (min-width: 570px) {
    width: 26.2%;
  }
`
export const RowItem = styled.div`
  position: relative;
  display: inline-block;
  box-shadow: 5px 10px 8px #060606;
  transition: opacity 0.3s;
  transition: transform 0.3s;
  margin: 0 0 30px 0 !important;
  transition: all 0.3s ease-in-out;
  max-width: 350px;

  img {
    max-width: 100%;
    height: auto;
    float: left;
    overflow: hidden;
  }
`
export const ItemText = styled.div`
  flex: 0 0 100%;
  width: auto;
  max-width: 100%;
  h1 {
    margin-top: 0 !important;
    text-transform: none;
    margin-bottom: 20px !important;
    max-width: 500px;
    font-size: 1.2rem;
    position: relative;
    margin-left: 0 !important;
    color: var(--white);
  }

  @media (min-width: 839px) {
    flex: auto;
  }
  @media only screen and (min-width: 570px) {
    max-width: 430px;
  }
`
export const ItemMeta = styled.ul`
  display: block;
  font-size: 0.9rem;
  color: var(--white);
  margin-left: -40px;
`
export const CreatorList = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  line-height: 30px;
`
export const ItemDescrible = styled.div`
  max-width: 430px;
  color: var(--white);
  p {
    line-height: 1.3em;
    font-size: 0.9rem;
    text-align: justify;
    text-justify: inter-word;

    a {
      text-decoration: none;
      color: var(--white);
      &:hover {
        color: #ff9090;
      }
    }
  }
`

export const MoreDetails = styled.section`
  display: flex;
  min-height: 455px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background: #151515;
  z-index: 1;
`
export const GridContainer = styled.div`
  display: block;
  width: 100%;
  overflow: hidden;
  width: 100%;
  max-width: 1240px;
  padding: 0 30px;
  margin: 0 auto;
`
export const GridRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--white);
  @media (max-width: 601px) {
    flex-direction: column;
  }
`
export const DetailWrap = styled.div`
  display: block;
  overflow: hidden;
  @media (min-width: 601px) {
    padding-right: 30px;
    margin-bottom: 0;
  }
`
export const DetailExtended = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const DetailExtendedItem = styled.div`
  padding: 0;
  margin: 0;
  float: none;
  width: 50%;
  display: block;
  @media (min-width: 601px) {
    flex: 1;
  }
`
export const DetailInfo = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  @media only screen and (min-width: 570px) {
    min-height: 120px;
  }

  li a {
    text-decoration: none;
    color: var(--white);
    &:hover {
      color: #ff9090;
    }
  }
`
