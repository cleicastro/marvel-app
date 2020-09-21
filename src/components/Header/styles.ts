import styled from 'styled-components'
export const Container = styled.nav`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 0;
  background: var(--primary);
  @media (max-width: 800px) {
    justify-content: flex-start;
  }
  overflow: hidden;
`

export const Logo = styled.img`
  flex-shrink: 0;
  margin-left: 10px;
  @media (max-width: 800px) {
    display: none;
  }
`
export const SearchForm = styled.form`
  padding-right: 24px;
  max-width: 100%;
  overflow: hidden;

  input {
    background: var(--grayMedium);
    outline: 0;
    height: 30px;
    border-radius: 6px;
    padding: 7px 12px;
    width: 30vw;
    border: none;
    margin-right: 50px;
    @media (max-width: 800px) {
      margin-left: 10px;
      width: 82vw;
    }
  }
`

export const ButtonSearch = styled.button`
  position: absolute;
  margin-left: -90px;
  z-index: 99;
  outline: 0;
  height: 44px;
  padding: 7px 12px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  cursor: pointer;
  border: none;

  &:hover {
    background: #ccc;
  }

  svg {
    float: right;
  }
`
