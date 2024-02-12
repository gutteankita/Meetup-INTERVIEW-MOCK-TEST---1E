// import {MainContainer, Img,Form,Heading,Label,Select,Option} from './styledComponents'

import styled from 'styled-components'

export const MainContainer = styled.div`
display:flex;

justify-content: center;
align-items: center;
min-height: 100vh;

`

export const Img = styled.img`
height: 400px;
width: 30%;
`

export const Form = styled.form`
height: 500px;
display:flex;
flex-direction: column;
justify-content: center;
width: 30%

`

export const Heading = styled.h1`
color: #334155;
font-size: 45px;
font-weight: 600;
margin-bottom: 10px;
`

export const Label = styled.label`
color: #7b8794;
font-size: 15px;
font-weight: 500;
margin-bottom: 7px;
`
export const Input = styled.input`
    height: 28px;
    font-size: 19px;
    padding: 5px;
    outline: none;
    border: 1px solid #cbd5e1;
    color: #475569;
    margin-bottom: 16px;
    width: 60%;
    border-radius: 5px;
`

export const Select = styled.select`
    height: 39px;
    font-size: 18px;
    padding: 5px;
    outline: none;
    border: 1px solid #cbd5e1;
    color: #334155;
    font-weight: 500;
    margin-bottom: 13px;
    width: 63%;
    border-radius: 5px;
`
export const Option = styled.option``

export const Button = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  align-self: flex-start;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
color: #ff0b37;
font-size: 14px;
margin-top: 2px;
`
