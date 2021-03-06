import { legacy_createStore as createStore} from 'redux'

const reducerFn = (state = {counter: 0}, action) => {
  // Synchronous function we shouldnt mutate the original state LIMITATIONS - it will crash the app
  
  if(action.type === "INC") {
    return {counter:state.counter+1};
  }
  if(action.type === "DEC") {
    return {counter:state.counter-1}
  }

  if(action.type === "ADD") {
    return {counter:state.counter + action.payload}
  }
  

  return state;
}

const store = createStore(reducerFn);


export default store;