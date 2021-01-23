import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, pluck, throttleTime } from "rxjs/operators";



const click$ = fromEvent(document, 'click');

click$.pipe(
  throttleTime(1000)
)//.subscribe(console.log);

/* Ejemplo 2 */
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

/* Estes operador lo que hace es que cuando este buscando, entonces cada segundo emite el valor con una funcion asincrona, el plucj hace que solo filtre el valor que necesitamos y con el distinct obtenemos el ultimo valor diferente */
input$.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,/* Es para que emita el primer valor */
    trailing: true/* Es para que emita el ultimo valor */
  }),
  pluck('target', 'value'),
  distinctUntilChanged(),
).subscribe(console.log);