import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const appearLetters = keyframes`
  from {
    opacity: 0;
    margin: -35%;
  }

  to {
    opacity: 1;
    margin-left: 0;
  }
`

const shakeRocket = keyframes`
  0% {
    transform: rotate(20deg);
  }

  50% {
    transform: rotate(22deg);
  }

  100% {
    transform: rotate(20deg);
  }
`

export const Box = styled.div`
  display: flex;
  background-color: #ffde59;
  width: 100%;
  height: 100%;

  user-select: none;
  overflow-y: hidden;
`
export const Container = styled.div`
      display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: start;
    padding-left: 10vw;
    animation: ${appearLetters} 1s linear forwards;
`;


export const Title = styled.span`
  font-size: 90px;
  color: #000;
  margin-top:5vh;
  @media(max-width: 500px) {
    font-size: 60px;
  }
`

export const SimpleText = styled.span`
  font-size: 22px;
`

export const Image = styled.img`
  position: absolute;
    top: 80px;
    right: 35%;
    width: 500px;
    transform: translateX(50%) rotate(20deg);
    transition: .8s;
    animation: ${shakeRocket} .6s linear backwards infinite;
    @media(max-width: 1100px) {
      width: 300px;
    }
    @media(max-width: 600px) {
      width: 225px;
      top: 60px;
    right: 8%;
    }
    
`

export const Line = styled.hr`
    width: 80%;
    position: absolute;
    height: 5px;
    background: black;
    bottom: 125px;
    right: 0;
    border: none;
    @media(max-width: 500px) {
    bottom: 70px;
  }
`


export const Card = styled.div`
  background: white;
  width: 40%;
  height: 150px;
  border-radius: 15px 15px 15px 0;
  display: flex;
  align-items:center;
  justify-content:center;
  box-shadow: 1px 1px 5px #872A1C;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  @media(max-width: 500px) {
    width: 90%;
    height: 12vh;
  }
`

export const ButtonLink = styled(Link)`
color: #000;
  text-decoration: none;
  text-align:center;
  position: absolute;
  bottom: 130px;
  right: 45px;
  font-size: 45px;
  cursor: pointer;
  @media(max-width: 500px) {
    bottom: 70px;
  right: 30px;
  }
`
