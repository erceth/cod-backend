import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'convertUnixSecondsToDate'
})
export class ConvertUnixSecondsToDatePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(unixTimeInSeconds: number, format: string): string {
    const unixTimeInMilliseconds = unixTimeInSeconds * 1000;
    return this.datePipe.transform(unixTimeInMilliseconds, format);
  }

}
