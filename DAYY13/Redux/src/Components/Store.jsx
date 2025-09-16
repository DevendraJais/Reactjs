
// we will store the createStore function from the redux
import {createStore} from 'redux'
import { BookReducer } from './BookReducer'

//redux store will hold the state of the entire application
const store = createStore(BookReducer)

export default store;