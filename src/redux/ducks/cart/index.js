// imports

import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'

// action definitions

const GET_PROD = 'GET_PROD'

const CART_ITEMS = 'CART_ITEMS'

const REMOVE_ITEM = 'REMOVE_ITEM'

const GET_CART = 'GET_CART'

// initial state

const initialState = {
    prod: [],
    add: [],
    remove: [],
    cart: []
}


// reducer

export default function (state = initialState, action) {
    switch(action.type) {
        case GET_PROD:
            return { ...state, prod: action.payload}
        case CART_ITEMS:
            return { ...state, add: action.payload}
        case REMOVE_ITEM:
            return {...state, remove: action.payload}   
        case GET_CART:
            return {...state, cart: action.payload}          
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


export function addItem(product) {

    return dispatch => {
        Axios.post('/cart', {product}).then(resp => {
            dispatch(listItems())
        })
       
    }
}

export function listItems() {
    return dispatch => {
        Axios.get('/cart').then(resp => {
            dispatch({
                type:   CART_ITEMS,
                payload: resp.data
            })
        })
    }
}

export function removeItem(id) {
    return dispatch => {
        Axios.delete('/cart/'+ id).then(resp =>{
            dispatch(listItems())
        })
    }

}


function getCart(){
   
    return dispatch => {
    axios.get("./cart").then(resp => {
        dispatch({
            type: GET_CART,
            payload: resp.data
    })
}, [])
}
}

export function useCart() {
    const dispatch = useDispatch()
    const products = useSelector(appState => appState.cartReducer.prod) 
    const add = (product) => dispatch(addItem(product))
    const remove = (id) => dispatch(removeItem(id))
    const cart = useSelector(appState => appState.cartReducer.cart)

    useEffect(() => {
        dispatch(getProd())
    }, [])

    useEffect(() => {
        dispatch(getCart())
    }, [])

 return { products, add, remove, cart }   
    
    
}







