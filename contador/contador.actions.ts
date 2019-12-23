import { Action } from '../ngrx-fake/ngrx';

export const incrementerAction: Action = {
    type: 'INCREMENTAR'
}

export const decrementerAction: Action = {
    type: 'DECREMENTAR'
}

export const multiplyAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2
}

export const divideAction: Action = {
    type: 'DIVIDE',
    payload: 2
}

export const resetAction: Action = {
    type: 'RESET'
}