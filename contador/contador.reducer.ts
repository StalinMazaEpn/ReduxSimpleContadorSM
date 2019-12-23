import { Action } from "../ngrx-fake/ngrx";

// Reducer
export function contadorReducer(state = 10, action: Action) {
    //regresar el estado
    switch (action.type) {
        case 'INCREMENTAR':
            return state += 1;
        
        case 'DECREMENTAR':
            return state -= 1;
        
        case 'MULTIPLICAR':
            return state * action.payload;
        
        case 'DIVIDE':
            return state / action.payload;
        
        case 'RESET':
            return state = 0;
        
        default: 
            return state;
    }
}