import {createStore} from "redux";

const initialState = {
    language: 'es',
    name: 'Pirlo',
}

const reducerLang = (state = initialState, action) => {
    if (action.type === "CHANGE_LAN") {
        return {
            ...state,
            language: action.language
        }
    } else if (action.type === "CHANGE_NAME") {
        return {
            ...state,
            name: action.name
        }
    }
    return state;
}

export default createStore(reducerLang);