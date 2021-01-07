import axios from "axios"
import { all, delay, fork, put, takeLatest } from "redux-saga/effects"

function loginAPI(data){
    return axios.post('/api/login', data)
}

function* login(action){
    try{
        //const result = yield call(loginAPI, action.data) //call(함수 이름, 매개변수)
        console.log('saga login')
        yield delay(1000)
        yield put({                                        
            type:'LOG_IN_SUCCESS',
            data: action.data
        })
    }catch(err){
        yield put({
            type:'LOG_IN_FAILURE',
            data: err.response.data
        })

    }
}
// function logoutAPI(){
//     return axios.post('/api/logout')
// }

function* logout(){
    try{
        yield delay(1000)
        yield put({
            type:'LOG_OUT_SUCCESS',
        })
    }catch(err){
        yield put({
            type:'LOG_OUT_FAILURE',
            data: err.response.data
        })

    }
}

function* watchLogIn(){
    yield takeLatest('LOG_IN_REQUEST', login)
}
function* watchLogOut(){
    yield takeLatest('LOG_OUT_REQUEST', logout)
}


export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut)
    ])
}