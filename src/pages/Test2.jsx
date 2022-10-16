import { useNavigate } from 'react-router-dom';
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
    margin: 50px;
    padding: 20px;
    align-items: center;
    height: 100%;

    @media ${device.tablet} { 
        flex-direction: row;
        flex-wrap: wrap;
      }
`

const TextBlockOne = styled.div`
    flex: 1 1 20%;
    text-align: center;
    font-size: 30px;
`

const TextBlockTwo = styled.div`
    flex: 1 1 80%;
    padding: 50px;
    text-align: center;
    font-size: 17px;
`

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

const Test2 = () => {
    const navigate = useNavigate()
  
    return (
      <TestWrapper>
          <TestForm>
              <TextBlockOne>
                  <p>Hello <strong>Jestin,</strong></p>
              </TextBlockOne>
              <TextBlockTwo>
                  <p>Thank you for completing first test.</p>
                  <p>Click below to start your second test </p>Good luck!
              </TextBlockTwo>
              <ButtonBlock>
                  <StartButton onClick={()=>navigate('/test/2')}>Start Test 2</StartButton>
              </ButtonBlock>
          </TestForm>
      </TestWrapper>
    )
}

export default Test2