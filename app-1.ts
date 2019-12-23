
//Acciones
interface Action {
    type: string;
    payload?: any;
}

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
        
        default: 
            return state;
    }
}

//Usar el reducer
const incrementerAction: Action = {
    type: 'INCREMENTAR'
}

const decrementerAction: Action = {
    type: 'DECREMENTAR'
}

const multiplyAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}


let initialState = 10;

console.log(reducer(10, incrementerAction))
console.log(reducer(10, decrementerAction))
console.log(reducer(10, multiplyAction))
console.log(reducer(10, divideAction))