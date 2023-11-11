// import {createStore} from 'redux'

// const initialState={
//     value:0,
//     showLabel:false
// }

// function appReducer(state=initialState,action){
//     switch (action.type) {
//         case 'increment':
//             return {
//                 ...state,value:state.value+1
//             }
//         case 'decrement':
//             return {
//                 ...state,value:state.value-1
//             }
//         case 'show-label':
//             return {
//                 ...state,showLabel:action.payload
//             }

//         default:
//             return state
//     }
// }

// const store=createStore(appReducer)

// export default store

// ------------------ combine reducer -------------------

import { combineReducers, createStore } from 'redux'

// ------------------ without combine reducer -------------------

// const initialState = {
//     value: 0,
//     showLabel: false
// }

// function appReducer(state = initialState, action) {
//     return{
//             value:valueReducer(state.value,action),
//             showLabel:showLabelReducer(state.showLabel,action)
//     }
// }

// ------------------ withcombine reducer -------------------

const appReducer = combineReducers({
    value: valueReducer,
    showLabel: showLabelReducer
})

function valueReducer(state = 0, action) {
    switch (action.type) {
        case 'increment':
            return state + 1

        case 'decrement':
            return state - 1
        default:
            return state
    }
}
function showLabelReducer(state = true, action) {
    switch (action.type) {
        case 'show-label':
            return action.payload
        default:
            return state
    }
}
// ------------- action creator ----------
function increment(){
    return{
        type:'increment'
    }
}
function decrement(){
    return{
        type:'decrement'
    }
}
function setShowLabel(payload){
    return{
        type:'show-label',
        payload:payload
    }
}
const store = createStore(appReducer)

export default store

export {
    increment,
    decrement,
    setShowLabel
}