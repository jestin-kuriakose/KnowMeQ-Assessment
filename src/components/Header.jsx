import React from 'react'
import styled from 'styled-components'

const Header = () => {
    const Header = styled.div`
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        border-bottom: 1px solid #eee; 
    `

    const Logo = styled.h1`
        font-weight: 700
    `
  return (
    <Header>
        <Logo>Test Taking Website</Logo>
    </Header>
  )
}

export default Header