
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

