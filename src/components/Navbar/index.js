import {Component} from 'react'
import {HeaderSection, Img} from './styledComponents'

class Navbar extends Component {
  render() {
    return (
      <HeaderSection>
        <Img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
      </HeaderSection>
    )
  }
}

export default Navbar
