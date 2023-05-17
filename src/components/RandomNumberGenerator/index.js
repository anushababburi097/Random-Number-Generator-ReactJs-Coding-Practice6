// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onButtonGenerate = () => {
    const randomValue = this.getRandomNum()
    this.setState(prevState => ({count: prevState.count + randomValue}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.onButtonGenerate}>
            Generate
          </button>
          <p className="countValue">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
