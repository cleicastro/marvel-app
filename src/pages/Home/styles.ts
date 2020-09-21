import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 97vh;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`
export const Main = styled.section`
  flex: 1;
  width: 70vw;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: 839px) {
    width: 100vw;
  }
`
export const TitleGroup = styled.h2`
  margin-left: 0 !important;
  font-size: 1.4rem;
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 30px;
  margin: 0 auto;
`
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 100%;

  @media (min-width: 320px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 601px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 839px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  margin-bottom: 16px;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  ul button {
    font-size: 14px;
    display: inline-block;
    padding: 10px 18px;
    color: #222;
    border: none;
    background: transparent;

    &:hover {
      background: #2ecc71;
      color: #fff;
    }
    &:active {
      background: #2ecc71;
      color: #fff;
      font-weight: bold;
    }
  }
  ul button:first-of-type,
  button:active,
  button:last-of-type {
    background-color: #2ecc71;
    color: #fff;
    font-weight: bold;
  }
`
