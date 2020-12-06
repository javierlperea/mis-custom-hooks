// import { useState } from 'react'

// export const useForm = ( initialState = {} ) => {

//     const [values, setValues] = useState(initialState)

//     const handleInputChange = ({ target }) => {

//         setValues({
//             ...values,   // <-- copio todo el contenido del formState
//             [ target.name ]: target.value
//         });
//     }

//     return [ values, handleInputChange ]
// }

/* TENER EN CUENTA */
// Cuando se llama este custom hook tengo que mandar como argumento un objeto con el nombre del input que quiero manejar
// como el UseForm retorna un objeto tengo que desestructurar las propiedades del valor (nombreInput) y la funcion handleInputChange
// por ejemplo:
/*  
    const [ { nombreInput }, handleInputChange] = UseForm({
        nombreInput: '',
    }); 
*/

import { useState } from "react"

export const UseForm = ( initialState = {} ) => {
    
    const [value, setValue] = useState(initialState)

    const handleInputChange = (e) => {
        setValue( {
            ...value,
            [ e.target.name ]: e.target.value
        })
    }

    const reset = () => {
        setValue( initialState );
    }

    return [ value, handleInputChange, reset ]
}

