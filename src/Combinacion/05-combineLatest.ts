

/* combineLatest ejecuta las observables pero no se completa la suscripcion hasta que se completen todos los observables en lista, y siempre ejecutan la sucripcion cuando los dos observables hayan ejecutado por lo menos una vez algun valor */

import { combineLatest, fromEvent } from "rxjs";
import { pluck } from 'rxjs/operators';

/* const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


combineLatest(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))
).subscribe(console.log); */

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'Usuario';
input2.placeholder = '*********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputStream = (elem: HTMLElement) => {
  return fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
    pluck<KeyboardEvent, string>('target', 'value')
  )
}

combineLatest(
  getInputStream(input1),
  getInputStream(input2)
).subscribe(console.log);