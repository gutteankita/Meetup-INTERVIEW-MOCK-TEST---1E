import React, {Component} from 'react'
import Navbar from '../Navbar'
import RegisterContext from '../../context/RegisterContext'
import {
  MainContainer,
  Img,
  Form,
  Heading,
  Label,
  Input,
  Select,
  Option,
  Button,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {
            name,
            topic,
            showError,
            updateError,
            changeName,
            changeTopic,
            registeredName,
          } = value

          const onHandleChangeInput = event => {
            changeName(event.target.value)
          }

          const onHandleChangeSelectOption = event => {
            changeTopic(event.target.value)
          }

          const onSubmitForm = event => {
            event.preventDefault()
            if (name.trim() !== '' && topic.trim() !== '') {
              const {history} = this.props
              history.replace('/')
              registeredName()
            } else {
              updateError()
            }
          }

          return (
            <>
              <Navbar />
              <MainContainer>
                <Img
                  src='https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png'
                  alt='website register'
                />
                <Form onSubmit={onSubmitForm}>
                  <Heading>Let us join</Heading>
                  <Label htmlFor='name'>NAME</Label>
                  <Input id='name' onChange={onHandleChangeInput} />
                  <Label htmlFor='topics'>TOPICS</Label>
                  <Select id='topics' onChange={onHandleChangeSelectOption}>
                    {topicsList.map(each => (
                      <Option value={each.id} key={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </Select>
                  <Button type='submit'>Register Now</Button>
                  {showError === true ? (
                    <ErrorMsg>Please enter your name</ErrorMsg>
                  ) : (
                    ''
                  )}
                </Form>
              </MainContainer>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Register
