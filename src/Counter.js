// 1. Zrób komponent Counter - 2 przyciski i h1 wyświetlający aktualny stan Countera
// 1.2. Załącz Counter do App
// 2. Niech komponent Counter wyświetla początkowo wartość przekazaną w propsie `startValue`
// 2.2 Niech komponent Counter ma ustawioną domyślną wartość propsa `startValue` na 3
// 2.3 Niech istnienie propsa `startValue` będzie wymagane i wymagane przekazanie w nim liczby. Skorzystaj z biblioteki `prop-types`

// https://reactjs.org/docs/typechecking-with-proptypes.html (edited)





import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  state = {
    number: this.props.startValue
  }

  render(){
    return(
      <div>
        <h1>{this.state.number}</h1>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ number: this.state.number - 1 })}
        >
          -
        </button>
      </div>
    )
  }
}

Counter.defaultProps = {
  startValue: 3
}
Counter.propTypes={
    startValue: PropTypes.number.isRequired
}

export default Counter