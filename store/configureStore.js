import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import reducer from '../reducers' //rootReducer호출

const configureStore = () =>{
    const middlewares = []
    const enhancer = process.env.NODE_ENV ==='production'
    ?   compose(applyMiddleware(...middlewares))
    :   composeWithDevTools(applyMiddleware(...middlewares))
    const store = createStore(reducer, enhancer)
    store.dispatch({
        type: 'CHANGE_NICKNAME',
        data: '방구'
    })
    return store
}

const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV==='development'})

export default wrapper;