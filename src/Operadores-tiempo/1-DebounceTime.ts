import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck } from "rxjs/operators";



const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(1000)
).subscribe(console.log);

/* Ejemplo 2 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

/* LO que se hace con el debounceTime despues de que se ejecuta el observable, el espera 1 segundo para vovler se a ajecutar y con pluck solo seleccionamos lo que necesitamos del tipo input y que con el distinct sean diferentes al ultimo valor enviado */
input$.pipe(
  debounceTime(1000),
  pluck('taget', 'value'),
  distinctUntilChanged(),
).subscribe(console.log);