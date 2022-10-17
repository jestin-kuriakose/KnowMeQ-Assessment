import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  }
const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
  };

const ChoiceWrapper = styled.div`
    padding:20px;
`
const InputWrapper = styled.div`
    padding:10px;
    margin: 10px;
    border: 1px solid #eee;
    border-radius: 10px;
    width:100%;
`
const Input = styled.input`
    margin: 10px;
    border-radius: 50%;
    accent-color: seagreen;
    width: 2em;
    height: 2em;
`
const ButtonBlock = styled.div`
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media ${device.tablet} {
        flex-direction: row;
    }

`
const StartButton = styled.button`
    padding: 15px 50px;
    border: none;
    background-color: rgb(70, 169, 151);
    color: #fff;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    :disabled {
        opacity: 0.4;
    }
`

const selectedInput = {
    backgroundColor: "#46a997",
    color: "#fff"
}
const unselectedInput = {
    backgroundColor: "#fff",
    color: "#000"
}

const Choices = (props) => {
    const [selectedChoice, setSelectedChoice] = useState("")
    const [choiceClicked, setChoiceClicked] = useState(props.selectedChoice)
    const [choiceSelected, setChoiceSelected] = useState(true)

    const handleChange = (e, index) => {
        setChoiceSelected(false)
        setSelectedChoice(e.target.value)
        setChoiceClicked(index)
        props.onChange(e.target.value, props.id)
    }

    const handleClick = () => {
        setChoiceSelected(true)
        setChoiceClicked(-1)
        props.onClick()
    }

  return (
    <ChoiceWrapper>
        {props.choices.map((c, index)=>(
            <InputWrapper key={index} style={choiceClicked===index ? selectedInput : unselectedInput}>
                <Input type="radio" value={c} onChange={(e)=>handleChange(e, index)} checked={selectedChoice === c}/><label>{c}</label>
            </InputWrapper>
        ))}
        <ButtonBlock>
            <StartButton disabled={choiceSelected} onClick={handleClick}>Next</StartButton>
        </ButtonBlock>
    </ChoiceWrapper>
  )
}

export default Choices