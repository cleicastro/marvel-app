import styled from 'styled-components'

export const ComicItem = styled.div`
  display: block;
  margin: 0 0 30px 0 !important;
`
export const RowItem = styled.div`
  position: relative;
  display: inline-block;
  box-shadow: 5px 10px 8px #888888;
  transition: opacity 0.3s;
  transition: transform 0.3s;
  margin: 0 0 30px 0 !important;
  transition: all 0.3s ease-in-out;

  img {
    max-width: 100%;
    height: auto;
    float: left;
    overflow: hidden;
  }
`
