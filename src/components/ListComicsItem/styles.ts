import styled from 'styled-components'

export const ComicItem = styled.div`
  display: block;
  margin: 0 0 30px 0 !important;
  animation: fadeIn 0.6s ease-in-out;
  &:hover,
  &:focus {
    color: #f00;
  }

  a {
    color: var(--black);
  }
  a:link {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color: #f00;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1 linear;
    }
  }
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

  &:hover,
  &:focus {
    opacity: 0.9;
    transform: scale(1.1);
    box-shadow: 10px 20px 16px #666;
  }
  &:after {
    transition: opacity 0.3s ease-in-out;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`
export const RowItemText = styled.div`
  margin-top: -20px;
  h5 {
    font-size: 1rem;
    margin: 0.3em 0 0.2em;
  }
  p {
    font-size: 0.8rem;
    letter-spacing: 0;
    margin-top: -5px;
  }
  p + p {
    margin-top: -15px;
  }
`
