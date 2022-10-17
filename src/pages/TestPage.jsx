import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import Header from '../components/Header';
import Test from '../components/Test';
import testData from '../dummyData'

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

  const TestWrapper = styled.div`
        background-color: #f5f6f6;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: flex-start;
        box-sizing: border-box;
    `

    const TestForm = styled.div`
        background-color: #fff;
        display: flex;
        flex-direction: column;
        flex-wrap: none;
        margin: 20px;
        padding: 20px;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        width: 80%;

        @media ${device.tablet} { 
            flex-direction: row;
            flex-wrap: wrap;
          }
    `

const TestPage = () => {
    const {testDataOne, testDataTwo} = testData
    const [questionCount, setQuestionCount] = useState(0)

    const navigate = useNavigate()
    const params = useParams()

    const [testId, setTestId] = useState(params.testId)

    const handleChange = () => {
        let countOne = testDataOne.length
        let countTwo = testDataTwo.length
        if(testId == 1) {
            if(questionCount < countOne-1) {
                setQuestionCount(prev=>prev+1)
            } else {
                navigate('/test-2')
            }
        } else {
            if(questionCount < countTwo-1) {
                setQuestionCount(prev=>prev+1)
            } else {
                navigate('/test-results')
            }
        }
    }
    
  return (
    <>
        <Header/>
        <TestWrapper>
            <Test data={testId===1 ? testDataOne[questionCount] : testDataOne[questionCount]} onChange={handleChange}/>
        </TestWrapper>

    </>
  )
}

export default TestPage