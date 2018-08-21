import { combineReducers } from 'redux';

import AutenticationReducers from './AutenticationReducers'
import MenuListReducers from './MenuListReducers'

export default combineReducers({
    AutenticationReducers,
    MenuListReducers
})
