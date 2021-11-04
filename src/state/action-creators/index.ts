import { ActionsType } from "../action-types";
import { Dispatch } from "redux";
import { Actions } from "../actions";

export const depositeMoney = (amount: number)=>{
    return (dispatch : Dispatch<Actions>)=>{
        dispatch({
            type: ActionsType.DEPOSITE,
            payload:amount
        })
    }
}


export const withdrawMony = (amount: number )=>{
    return (dispatch: Dispatch<Actions>)=>{
        dispatch({
            type: ActionsType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = ()=>{
    return (dispatch : Dispatch<Actions>)=>{
        dispatch({
            type: ActionsType.BANKRUPT
        })
    }
}