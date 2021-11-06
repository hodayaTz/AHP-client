import { Settlement } from './settlement'
import { PrayerText } from './prayer_text'

export class SettlementHoliday{
    idSettlement:number
    idSchedulingHoliday:number 
    amountPeopleConsumed:number 
    idPrayer:number
    isSynagogue:boolean
    isSeferTora :boolean
    additionalNeeds:string 
    professionals:number[]=[]
    settlement:Settlement
    prayerText:PrayerText
}