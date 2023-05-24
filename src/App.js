import React from 'react'
import { GlobalStyles } from './Styles/global'


const App = () => {
  return (
    <div className="App">
      <GlobalStyles/>
      <div>Header</div>
      <TypingBox/>
      <div>Footer</div>
      </div>
  )
}

export default App