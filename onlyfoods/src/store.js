import { createStore } from "redux";

const initialState = {
    language: 'es',
    name: 'Pirlo',
    color: '',
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
    } else if (action.type === "CHANGE_COLOR") {
        localStorage.setItem("colorpanel", JSON.stringify({ color: action.color }));
        return {
            ...state,
            color: action.color
        }
    }
    return state;
}

export default createStore(reducerLang);