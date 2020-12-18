import styled, { keyframes } from 'styled-components';

const appearLetters = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;  }
`
const rCollapse = keyframes`
  from {
    height: 0%;
  }
  to {
    height: 100%;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  justify-items: center;
  transition: 1s;
  @media (max-width: 918px) {
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  }
    
`

export const Card = styled.div`
  position: relative;
  width: 450px;
    background: white;
    
    margin: 10px;
    border-radius: 20px 20px 20px 0;
    box-shadow: 1px 1px 5px #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: 1s;
    
    & > div {
      width: 100%;
      height: 100%;
      padding: 20px;
      display: flex;
    flex-direction: column;
  }
    @media (max-width: 918px) {
      width: 330px;
      height: 330px;
    }
`

export const Image = styled.img`
  width: 100%;
    height: 85%;
    /* background-size: cover; */
    object-fit: cover;
    border-radius: 20px 20px 20px 0;
`
export const EmptyImage = styled.div`
  width: 100%;
    height: 85%;
    /* background-size: cover; */
    object-fit: cover;
    border-radius: 20px 20px 20px 0;
    background-color: rgb(230,230,230);
`

export const StartupName = styled.span`
font-size: 22px;
    margin: 5px auto;
`

export const CategoryIcon = styled.div`
  position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    bottom: 20px;
    right: 20px;
    background: ${props => props.color || '#999'};
`
export const Collapse = styled.div`
  animation: ${rCollapse} .5s linear forwards;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 20px 20px 20px 0;

  span {
    animation: ${appearLetters} 1.5s linear forwards;
    width: 100%;
    background-color: #fff;
  }

  span:nth-child(1) {
    font-size: 25px;
  }
`