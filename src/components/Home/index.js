import {Component} from 'react'
import Navbar from '../Navbar'
import RegisterContext from '../../context/RegisterContext'
import {Link} from 'react-router-dom'

import {MainContainer, Button, Heading, Para, Img} from './styledComponents'

class Home extends Component {
  onRegister = () => {
    const {history} = this.props
    history.replace('/register')
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {name, topic, isRegistered} = value
          return (
            <>
              <Navbar />

              {isRegistered === true ? (
                <MainContainer>
                  <Heading>Hello {name}</Heading>
                  <Para>Welcome to {topic}</Para>
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </MainContainer>
              ) : (
                <MainContainer>
                  <Heading>Welcome to Meetup</Heading>
                  <Para>Please Register for the topic</Para>
                  <Link to="/register">
                    <Button onClick={this.onRegister}>Register</Button>
                  </Link>

                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                    alt="meetup"
                  />
                </MainContainer>
              )}
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Home
