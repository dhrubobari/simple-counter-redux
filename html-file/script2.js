const actions = [
    {type: "increment", payload: 1},
    {type: "decrement", payload: 1},
    {type: "increment", payload: 1},
    {type: "decrement", payload: 1},
]

const initialState2 = {
    value: 0,
}

const counterReducer2 = (state, action) => {
    if(action.type === 'increment') {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - action.payload
        }
    } else {
        return state
    }
}

const finalResult = actions.reduce(counterReducer2, initialState2);

console.log(finalResult)