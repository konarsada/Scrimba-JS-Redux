const redux = require("redux")

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function reducer(state = {count: 0}, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                count: state.count + action.payload
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(changeCount())
store.dispatch(changeCount(5))
store.dispatch(changeCount(-3))