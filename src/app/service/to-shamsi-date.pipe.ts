import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'jalali-moment';

@Pipe({
  name: 'toShamsiDate',
})
export class ToShamsiDatePipe implements PipeTransform {
  transform(date: string, format: string = 'YYYY/MM/DD HH:mm'): string {
    date = date + '000';
    console.log(date);
    if (date) {
      var persianDate = new Date(+date).toLocaleDateString();

      return persianDate;
    } else {
      return '';
    }
  }
}
