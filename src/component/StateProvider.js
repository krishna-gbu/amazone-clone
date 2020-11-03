/// setup data layer 
///we need this to track the basket
import React,{createContext , useContext ,useReducer } from 'react'

export const StateContext = createContext();

//build a provider
export const StateProvider = ({reducer , initialstate, children})=>(
    <StateContext.Provider value = {useReducer(reducer,initialstate)}>
        {children}
   </StateContext.Provider>
)


export const useStatevalue = ()=> useContext(StateContext)
