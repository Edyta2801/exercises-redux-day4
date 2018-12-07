import React from 'react'
import Counter from './Counter'
import PassingProps from './PassingProps'


const App = (props) => (
  <div>
    <Counter
      startValue={0}
    />

    <Counter
   />
   <PassingProps
      passingValue={5}
      passingFun={() => alert('bu')}
    />
  </div>
)

export default App
