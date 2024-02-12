import React, {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

class App extends Component {
  state = {
    name: '',
    topic: 'Arts and culture',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({
      name,
    })
  }

  changeTopic = topic => {
    this.setState({
      topic,
    })
  }

  registeredName = () => {
    this.setState({
      isRegistered: true,
    })
  }

  updateError = () => {
    this.setState({
      showError: true,
    })
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registeredName: this.registeredName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
