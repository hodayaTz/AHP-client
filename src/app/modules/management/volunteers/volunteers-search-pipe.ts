import { Pipe, PipeTransform } from '@angular/core';
import { Volunteer } from 'src/app/models/volunteer';

@Pipe({
    name: 'search'
})
export class VolunteersSearchPipe implements PipeTransform {
    transform(volunteers: Volunteer[]|null, searchText: string): Volunteer[] {
        if (!volunteers) return [];
        if (!searchText) return volunteers;
        searchText = searchText.toLowerCase();
        return volunteers.filter(volunteer=>(volunteer.firstName+" "+volunteer.lastName).toLowerCase().includes(searchText))
    }
}
