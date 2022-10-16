import React, { useState } from 'react'
import styled from 'styled-components'

const ChoiceWrapper = styled.div`
    padding:20px;
`
const InputWrapper = styled.div`
    padding:10px;
    margin: 10px;
    border: 1px solid #eee;
`
const Input = styled.input`
    padding: 20px;
    margin: 10px;
    border: 2px solid #eee;
    border-radius: 50%;
    background-color: #000;
    color: #000;
`

const Choices = (props) => {
    const [selectedChoice, setSelectedChoice] = useState("")

    const handleChange = (e) => {
        setSelectedChoice(e.target.value)
        props.onChange(e.target.value, props.id)
    }

  return (
    <ChoiceWrapper>
        {props.choices.map((c)=>(
            <InputWrapper>
                <Input type="radio" value={c} onChange={(e)=>handleChange(e)} checked={selectedChoice === c}/>{c}
            </InputWrapper>
        ))}
    </ChoiceWrapper>
  )
}

export default Choices