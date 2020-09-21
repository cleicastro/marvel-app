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

export const ListCards = styled.ul`
  list-style: none;
  display: block;
  animation: fadeIn 0.6s ease-in-out;
  @keyframes fadeIn {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`
export const CardSearch = styled.div`
  padding: 30px 0;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
  color: #fff;
  text-align: center;
`

export const CardSearchWrapper = styled.div`
  display: grid;
  -ms-grid-columns: 2fr 7fr;
  grid-template-columns: 2fr 7fr;
  grid-gap: 8%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  a {
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: block;
    margin: 0;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center center;
    object-position: center center;
    padding: 0;
    width: 100%;
    height: 100%;

    img {
      width: 85%;
    }
  }
`
export const CardSearchBody = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  position: relative;
  overflow: hidden;
  line-height: 1;
  font-size: 0.8rem;
  text-align: left;
  border: 1px solid;

  a {
    text-decoration: none;
    color: #bbb;
    letter-spacing: 1px;
    text-transform: uppercase;
    &:hover {
      color: #e62429;
    }
  }
  h2 {
    color: #151515;
    letter-spacing: 0;
    margin-top: 14px;
    font-size: 22px;
    text-transform: none;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    &:hover {
      color: #e62429;
    }
  }
`
export const CardSearchFooter = styled.div`
  display: block;
  overflow: hidden;
  overflow-wrap: normal;
  text-align: left;

  p {
    color: #999;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`
