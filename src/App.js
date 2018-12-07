import React from 'react'
import Counter from './Counter'

const App = (props) => (
  <div>
    <Counter
      startValue={3}
    />

    <Counter />
  </div>
)

export default App
