// Write your code here
import {component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  increseCount = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <span className="counter">{count}</span>{' '}
          times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button type="button" onClick={this.increseCount} className="btn">
          click Me!
        </button>
      </div>
    )
  }
}
