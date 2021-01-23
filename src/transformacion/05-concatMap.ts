import { fromEvent, interval } from "rxjs";
import { concatMap, take } from "rxjs/operators";



const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/* Con el concat map lo que se hace es que despues de cada que se ejecute un observable, el espera a que se complete para poder volverlo a hacerlo funcionar, es decir si yo ejecuto un observable de 1 a 3 y cuando va en 1 ejecuto el siguiente, el primero completa el que esta en curso y continua con el nuevo */
click$.pipe(
  concatMap(() => interval$)
).subscribe(console.log);