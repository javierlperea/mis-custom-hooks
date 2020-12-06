/* Para poder darle un factor de incremento o decremento debo pasar como argumento el factor y sumarlo o restarlo en el setState.
1. Desde el componente CounterWithCustomHook envio en el llamado a la funcion onClick los argumentos, ese argumento tiene el factor que utilizare en increment decrement y reset --> onClick={ () => increment(2) }
2. Increment y decrement tienen que tomar el estado actual y modificarlo segun el factor que reciben desde el componente
3. Reset vuelve a tomar el valor que esta indicado por defecto en el componente initialState
4. Debo retornar state, increment, decrement, reset para que dentro del componente pueda desestructurarlos y poder hacer el llamdo de la funcion
*/

import { useState } from 'react'

export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState)    //state=10
    
    const increment = () => {
        setCounter(counter + 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    // Retorna un objeto con las funciones (la logica) y el estado final del hook
    return {
        counter,
        increment,
        decrement,
        reset
    };
}


