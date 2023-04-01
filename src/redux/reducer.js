import {types} from "./types";


const initialState = {
    counter: null
}


export default function reducer(state = initialState, action){
    switch (action.type){
        case types.PLUS:
            return {counter: action.payload}
        case types.MINUS:
            return {counter: action.payload}
        case types.MULTIPLY:
            return {counter: action.payload}
        case types.DIVISION:
            return {counter: action.payload}
        default: return state
    }
}