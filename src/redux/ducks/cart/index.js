// imports

import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// action definitions

const GET_PROD = 'GET_PROD'

// initial state

const initialState = {
    prod: []
}


// reducer

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_PROD:
            return { ...state, prod: action.payload}

        default:
            return state    
    }
    
}
// action creators

// const dispatch = useDispatch()

function getProd(){
   
    return dispatch => {
    axios.get("./products").then(resp => {
        dispatch({
            type: GET_PROD,
            payload: resp.data
    })
}, [])
}
}

export function useCart() {
    const dispatch = useDispatch()
    const products = useSelector(appState => appState.cartReducer.prod) 

    useEffect(() => {
        dispatch(getProd())
    }, [])

 return { products }   
    
    
}







