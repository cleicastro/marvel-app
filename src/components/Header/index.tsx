import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import IconLogo from '../../assets/logo.svg'
import { useRequestCharacters } from '../../hooks/searchCharacters'
import { Container, Logo, SearchForm, ButtonSearch } from './styles'

const Header: React.FC = () => {
  const inputSearchRef = useRef<HTMLInputElement>(null)
  const searchCharacters = useRequestCharacters()
  const history = useHistory()

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const characters = inputSearchRef.current?.value
      if (characters !== '') {
        searchCharacters(characters)
        history.push(`/search?characters=${characters}`)
      }
    },
    []
  )

  return (
    <Container>
      <Link to="/">
        <Logo src={IconLogo} alt="logo" />
      </Link>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Characters"
          ref={inputSearchRef}
        />
        <ButtonSearch type="submit">
          <FaSearch />
        </ButtonSearch>
      </SearchForm>
    </Container>
  )
}

export default Header
