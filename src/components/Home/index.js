import {Component} from 'react'
import './index.css'

class Home extends Component {
  state = {headingText: 'Please Login', buttonText: 'Login'}

  isBtnClicked = () => {
    const {buttonText} = this.state
    if (buttonText === 'Login') {
      this.setState(() => ({headingText: 'Welcome User', buttonText: 'Logout'}))
    } else {
      this.setState(() => ({headingText: 'Please Login', buttonText: 'Login'}))
    }
  }

  render() {
    const {headingText, buttonText} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">{headingText}</h1>
          <button type="button" className="button" onClick={this.isBtnClicked}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
