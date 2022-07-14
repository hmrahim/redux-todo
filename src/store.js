 import { createStore } from 'redux'
import { todoReducer } from './reducer/todoReducer'

 const store = createStore(todoReducer)

 export {store}


