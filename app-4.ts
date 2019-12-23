import { Store, createStore } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementerAction, decrementerAction, divideAction } from './contador/contador.actions';

const store: Store = createStore(contadorReducer);

console.log('Store Initial', store.getState());
store.subscribe(() => {
    console.log('Subscribe', store.getState());
});

store.dispatch(incrementerAction);
store.dispatch(decrementerAction);
store.dispatch(divideAction);
