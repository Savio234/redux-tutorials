const redux = require('redux')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const BUY_CAKE = 'Buy cake'
const BUY_ICECREAM = 'Buy ice cream'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action. Buy a cake'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Buying ice cream'
    }
}

const initialStates = {
    numOfCakes: 10,
    numOfIceCreams: 20
}

const initialCakeState = {
    numOfCakes: 10,
}
const initialIcecreamState = {
    numOfIceCreams: 20
}

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }

//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

const iceCreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger)) // Holding the application state
console.log('Initail state', store.getState());
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()