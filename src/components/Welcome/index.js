import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  subscribeStatus = () => {
    this.setState(prevState => {
      if (prevState.isSubscribed === false) {
        return {isSubscribed: true}
      }
      return {isSubscribed: false}
    })
  }

  render() {
    const {isSubscribed} = this.state
    const statusText = isSubscribed ? 'Subscribed' : 'Subscribe'

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button type="button" className="button" onClick={this.subscribeStatus}>
          {statusText}
        </button>
      </div>
    )
  }
}

export default Welcome
