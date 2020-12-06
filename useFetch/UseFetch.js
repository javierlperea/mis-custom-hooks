
import { useEffect, useRef, useState } from "react"

export const UseFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ loading: true, data: null, error: null })

    useEffect( () => {
        // console.log('activo useEfect, en realidad activo el componente');
        return () => {
            isMounted.current = false;
            // console.log('desactivo useEfect, en realidad desactivo el co');
        }
    }, [])

    useEffect( () => {
        
        setState({ loading: true, data: null, error: null })

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {

                if( isMounted.current ) {
                    
                    setState({
                        loading: false,
                        error: false,
                        data
                    })
                }

            })

    }, [url])

    return state;
}
