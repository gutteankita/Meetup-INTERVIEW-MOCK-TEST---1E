import {Div, Heading, Para, Img} from './styledComponents'

const NotFound = () => (
  <Div className="not-found-container">
    <Img
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
      className="not-found-img"
    />
    <Heading>Page Not Found</Heading>
    <Para>We are sorry, the page you requested could not be found</Para>
  </Div>
)

export default NotFound
