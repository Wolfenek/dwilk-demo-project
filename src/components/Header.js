import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <header>
      <Navbar />
    </header>
  )
}

const Navbar = styled.nav`
  padding-top: 50px;
`

export default Header
