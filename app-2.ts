import { Action } from './ngrx-fake/ngrx';
import { incrementerAction, decrementerAction, resetAction } from './contador/contador.actions';

// Reducer
function reducer(state = 10, action: Action) {
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


console.log(reducer(10, incrementerAction))
console.log(reducer(10, decrementerAction))
console.log(reducer(10, resetAction))