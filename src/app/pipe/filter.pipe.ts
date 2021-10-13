import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value:any,filteredString:string){
    if (value.length===0 || filteredString==='') 
    {
      return value;
    }
    const getRestaurants=[];
    for(const resto of value){
      if(resto['name']===filteredString){
        getRestaurants.push(resto);
      }
    }
    return getRestaurants;
  }
}
