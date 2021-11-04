import {ActionsType} from '../action-types/index'

interface DepositeAction {
    type: ActionsType.DEPOSITE,
    payload:number
}

interface WithdrawAction {
    type: ActionsType.WITHDRAW,
    payload: number
}

interface Bankrupt {
    type:ActionsType.BANKRUPT
}

export type Actions = DepositeAction | WithdrawAction | Bankrupt