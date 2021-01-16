import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    try {
      const phraseWithoutSpaces = value.toLocaleLowerCase().split(' ');
      const capitalizedPhrase = [];
      phraseWithoutSpaces.forEach(element => {
        capitalizedPhrase.push(element[0].toUpperCase());
        capitalizedPhrase.push(element.slice(1));
        capitalizedPhrase.push(' ');
      });
      return capitalizedPhrase.join('').trim();
    } catch (error) {
      return '';
    }
  }

}
