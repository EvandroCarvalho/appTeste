import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import store from 'react-native-simple-store';

import { CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_PASSWORD,
    REGISTER_SUCESS,
    REGISTER_ERROR,
    LOGIN_SUCESS,
    LOGIN_ERROR,
    LOADING } from './types';

export const changeEmail = (email) => {
    return {
        type: CHANGE_EMAIL,
        payload: email
    }
}

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}

export const changePassword = (password) => {
    return{
        type: CHANGE_PASSWORD,
        payload: password
    }
}

export const registerUser = (data) => {
    let header = {
        headers: {'content-type': 'application/json'}
      };
    let requestData = {
        email: data.email,
        name: data.name,
        password: data.password
    }
    return dispatch => {
        dispatch({type: LOADING})
        if(validatePassword(data.password)) {
            axios.post('https://dev.people.com.ai/mobile/api/v2/register',
            requestData, header )
            .then(response => dispatch({ type: REGISTER_SUCESS }))
            .catch(error => dispatch({ type: REGISTER_ERROR }))
        }
        else {
            dispatch({ type: REGISTER_ERROR })
        }
    }  
}

export const validateUser = (data) => {
    let header = {
        headers: {'content-type': 'application/json'}
      };
    let requestData = {
        email : data.email,
        password: data.password
    };
    return dispatch => {
        dispatch({type: LOADING})
        axios.post('https://dev.people.com.ai/mobile/api/v2/login',
        requestData,header )
           .then(response => {
               let user = {
                   email: requestData.email,
                   token: response.data.token,
                   links: []
                }
               // console.log(user)
               saveStorage(user)
                loginSucess(user, response.data, dispatch)
            })
            .catch(error =>  loginError(dispatch))
        }
}


const loginSucess = (user, response, dispatch) => {
    dispatch({type: CHANGE_EMAIL, payload: user.email})
    dispatch({type: LOGIN_SUCESS, payload: response.token})
    Actions.main();
}

const loginError = (dispatch) => {
    dispatch({type: LOGIN_ERROR, payload: "Usuario ou senha incorreto"})
}


const validatePassword = password => {
    if(password.length > 9 && contensSpecialChar(password) && contensChar(password) && contensNumber(password)) {
        return true;
    } else {
        return false;
    }

}

const contensSpecialChar = password => {
   return  password.match("[!#$%&'()*+,-./:;?@[\\\]_`{|}~]") ? true : false;
}

const contensNumber = password => {
    return password.match("[123456789]") ? true : false;
}

const contensChar = password => {
    return password.match("[A-Z]") ? true : false
}

const saveStorage = (user) => {

    AsyncStorage.setItem('user1', user);


    store.push('usuario', user)
    .catch(err => logError(err))
}


