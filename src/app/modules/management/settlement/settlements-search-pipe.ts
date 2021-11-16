import { Pipe, PipeTransform } from '@angular/core';
import { Volunteer } from 'src/app/models/volunteer';
import { Settlement } from 'src/app/models/settlement';

@Pipe({
    name: 'search'
})
export class SettlementsSearchPipe implements PipeTransform {
    transform(settlements: Settlement[]|null, searchText: string): Settlement[] {
        if (!settlements) return [];
        if (!searchText) return settlements;
        searchText = searchText.toLowerCase();
        return settlements.filter(s=>((s.nameSettlement).toLowerCase()).includes(searchText))
    }
}

