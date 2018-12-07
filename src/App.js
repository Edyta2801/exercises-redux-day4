import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Counter from './Counter'
import PassingProps from './PassingProps'

const App = (props) => (
  <div>
    <Router>
      <div>
        <Route path='/' exact component={Counter} />
        <Route path='/counter' component={Counter} />
        {/* PassingProps component with no props */}
        <Route path='/passing-props' component={PassingProps} />
      </div>
    </Router>
  </div>
)

export default App