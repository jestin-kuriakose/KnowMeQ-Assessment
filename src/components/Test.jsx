import { useState } from 'react';
import styled from 'styled-components'
import Choices from '../components/Choices';
import Question from '../components/Question';

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

const ButtonBlock = styled.div`
flex: 1 1 100%;
display: flex;
flex-direction: column;
justify-content: center;
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
`

const Test = (props) => {
    const data = props.data
    const [responses, setResponses] = useState([])

    const handleChange = (choice, id) => {
        
        const i = responses?.findIndex(e => e.id === id)
        setResponses((prev) => {
            if(i === -1){
                return [...prev, {id, choice}]
            } else {
                let temp = [...prev]
                temp[i].choice = choice
                return temp
            }
            
        })
        console.log(responses)
    }

  return (
    <>
        <Question question={data.question}/>
        <Choices id={data.id} choices={data.choices} onChange={handleChange}/>
        <ButtonBlock>
            <StartButton onClick={()=>props.onChange()}>Next</StartButton>
        </ButtonBlock>
    </>
  )
}

export default Test