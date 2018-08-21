import { RECEIVE_DATA_STORAGE, ADD_LIST_LINK } from '../actions/types'
import { AsyncStorage } from 'react-native';

 export const receiveLinks = (email) => {
    return dispatch => {
        try{
            AsyncStorage.getItem(email)
            .then(result => {
                    if(result !== null){
                        dispatch({type: RECEIVE_DATA_STORAGE, payload: JSON.parse(result)})
                    }else {
                        dispatch({type: RECEIVE_DATA_STORAGE, payload: []})
                    }
            })
        } catch(error) {
            console.log(error)
        }
    }
}

export const addListLink = (data, dataProps) => {
    let link = {
        site: data.urlAdd,
        user: data.userAdd,
        password: data.passwordAdd
    }
    dataProps.dataSites.push(link)
    AsyncStorage.setItem(dataProps.emailLogged, JSON.stringify(dataProps.dataSites))

    return {
        type: ADD_LIST_LINK,
        payload: dataProps
    }
}

export const removeData = ( dataRemove ) => {
    let arrayFilter
    let item = {
        site: dataRemove.link,
        user: dataRemove.email,
        password: dataRemove.password
    }
    return async dispatch => {
        await AsyncStorage.getItem(dataRemove.userLogged)
            .then(Response => {
                arrayFilter = JSON.parse(Response).filter(value => {
                    return (value.site.toLowerCase() !== item.site.toLowerCase())
                })
            })
            AsyncStorage.setItem(dataRemove.userLogged, JSON.stringify(arrayFilter))
            dispatch({type: RECEIVE_DATA_STORAGE, payload: arrayFilter})
    }


}
