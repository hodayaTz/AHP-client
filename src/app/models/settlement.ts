import { ContactPerson } from './contactPerson';
import { Area } from './area';

export class Settlement{
    idSettlement:number
	nameSettlement:string
	idArea:number
	idContactPer:number
	contactPer:ContactPerson
	areaName:string
	isActive:boolean 
	area:Area
}



