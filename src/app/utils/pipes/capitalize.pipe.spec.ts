import { pipe } from 'rxjs';
import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('create an instance', () => {
    const capitalizePipe = new CapitalizePipe();
    expect(capitalizePipe).toBeTruthy();
  });
  it('should return Hola Mundo', () => {
    const capitalizePipe = new CapitalizePipe();
    expect(capitalizePipe.transform('hola mundo') === 'Hola Mundo').toBe(true);
  });
});
