import { CHANGE_EMAIL,
    CHANGE_NAME,
    CHANGE_PASSWORD,
    REGISTER_SUCESS,
    REGISTER_ERROR,
    LOGIN_SUCESS,
    LOGIN_ERROR,
    LOADING,
    RECEIVE_DATA_STORAGE } from '../actions/types'

const INITIAL_STATE = {
    name: '',
    email: 'usertest3@email.com',
    password: 'Senha#123456',
    errorRegister: '',
    loginErro: '',
    loading: false,
    token: '',
    links: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_EMAIL:
            return { ...state, email: action.payload };
        case CHANGE_NAME:
            return {...state, name: action.payload };
        case CHANGE_PASSWORD:
            return { ...state, password: action.payload };
        case REGISTER_ERROR:
            return { ...state, errorRegister: 'Dados de cadastro invalidos', loading: false };
        case REGISTER_SUCESS:
            return { ...state, name: '', password: '', errorRegister: '', loading: false};
        case LOGIN_ERROR:
            return { ...state, loginErro: action.payload, loading: false };
        case LOGIN_SUCESS:
            return { ...state, token: action.payload, loading: false, errorRegister: '' };
        case LOADING:
            return { ...state, loading: true }
        case RECEIVE_DATA_STORAGE:
            return { ...state, links: action.payload }
        default:
            return state
    }

}