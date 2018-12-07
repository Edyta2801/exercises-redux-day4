import React from 'react'


class Counter extends React.Component {
    // II sposób:
    // constructor(){ 
    //     super()
    //     this.state={}
    // }

    state = {}

    render() {
        this.render(
            <div>
                <h1>
                    {this.state.number}
                </h1>
                <button
                    // setState przyjmuje obiekt, ale może przyjmuje też funkcję
                    onClick={() => this.setState({number:this.state.number +1})}
                >
                    +
                </button>
                <button
                    onClick={() => this.setState({number:this.state.number +1})}
                >
                    -
            </button>
            </div>
        )


    }
}
export default Counter