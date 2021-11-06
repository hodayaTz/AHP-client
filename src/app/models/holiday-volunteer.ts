import { Volunteer } from './volunteer'
import { PrayerText } from './prayer_text'

export class HolidayVolunteer{
    idSchedulingHoliday:number
    idVolunteer :number
    countjoiners:number
    withFamily :boolean
    countKids :number
    idPrayer :number 
    hasCar:boolean
    hasLicense :boolean
    professionals:number[]=[]
    volunteer:Volunteer
    idSettlement?:number
    prayerText:PrayerText
}