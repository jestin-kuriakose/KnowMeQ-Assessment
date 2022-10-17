import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderSection = styled.div`
background-color: #fff;
display: flex;
flex-direction: column;
padding: 0 50px;
border-bottom: 1px solid #eee; 
`

const Logo = styled.h1`
font-weight: 700
`

const Header = () => {
  return (
    <HeaderSection>
        <Link to={'/'} style={{color:"black", textDecoration: "none"}}><Logo>Test Taking Website</Logo></Link>
    </HeaderSection>
  )
}

export default Header