import {createStore} from 'redux'

function appReducer(){

}

const store=createStore(appReducer)

const state=store.getState()

console.log(state);