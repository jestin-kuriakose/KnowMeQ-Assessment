import React from 'react'
import styled from 'styled-components'

const FooterSection = styled.div`
    position: relative;
    bottom: 0px;
    left: 0px;
    width: 100%;
    border-top: 1px solid #eee;
    padding: 0 50px;
    background-color: #fff;
`

const Footer = () => {
  return (
    <FooterSection>
        <p>Design by Jestin Kuriakose</p>
    </FooterSection>
  )
}

export default Footer