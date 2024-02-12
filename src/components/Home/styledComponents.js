import styled from 'styled-components'
// import {MainContainer, Heading, Para, Button} from './styledComponents'
import {Link} from 'react-router-dom'

export const MainContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 100vh;
`

export const Heading = styled.h1`
color: #2563eb;
font-size: 55px;
margin-bottom: 0px;
`
export const Para = styled.p`
color: #334155;
font-size: 32px;
 margin-top: 0; 
font-weight: bold;
`
export const Img = styled.img``

export const Button = styled.button`
  color: #fff;
  background-color: #3b82f6;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
`
