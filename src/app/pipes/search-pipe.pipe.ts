import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value); // this shows in the console
    console.log(args); // this does not show anything in the console when typing
    if (!value) {
      return null;
    }
    if (!args) {
      return value;
    }
    args = args.toLowerCase();

    return value.filter(function (item) {
      return JSON.stringify(item).toLowerCase().includes(args);
    });

  }

}
