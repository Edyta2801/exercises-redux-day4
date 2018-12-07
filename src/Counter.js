
import React from 'react'


class Counter extends React.Component {
    // II sposób:
    // constructor(){ 
    //     super()
    //     this.state={}
    // }

    state = {
        number:this.props.startValue
    }

    render() {
        this.render(
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    // setState przyjmuje obiekt, ale może przyjmuje też funkcję
                    onClick={() => this.setState({ number: this.state.number + 1 })}
                >
                    +
                </button>
                <button
                    onClick={() => this.setState({ number: this.state.number + 1 })}
                >
                    -
            </button>
            </div>
        )


    }
    Counter.defaultProps = { startValue: 3 }

}
export default Counter