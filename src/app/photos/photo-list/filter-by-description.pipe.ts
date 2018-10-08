import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {
    transform(photos: Photo[], descripitionQuery: string) {
        descripitionQuery = descripitionQuery.trim().toLowerCase();

        if(descripitionQuery){
            return photos .filter(photo => 
                    photo.description.toLowerCase().includes(descripitionQuery));
        }else{
            return photos;
        }
    }

}