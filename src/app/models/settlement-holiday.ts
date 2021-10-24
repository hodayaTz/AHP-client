import { Settlement } from './settlement'

export class SettlementHoliday{
    idSettlement:Number
    idSchedulingHoliday:Number 
    amountPeopleConsumed:Number 
    idPrayer:Number
    isSynagogue:boolean
    isSeferTora :boolean
    additionalNeeds:string 
    professionals:number[]=[]
    settlement:Settlement
}