import React from 'react'
import { Provider } from 'react-redux'
import BookContainer from './Components/BookContainer'
import store from './Components/Store'

function App() {
  return (
    <Provider store = {store}>
      <>
       <BookContainer/>
      </>
    </Provider>
  )
}

export default App