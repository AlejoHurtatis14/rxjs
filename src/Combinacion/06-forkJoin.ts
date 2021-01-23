
/* forkJoin lo que hace es que puede recibir los observables que se desee, pero deben ser finitos porque o sino no se ejecuta, y cuando se completen todos, lo que se hace es que ejecuta los ultimo valores de cada uno de los observables en un array */

import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3000));

forkJoin(
  numeros$,
  intervalo$,
  letras$
).subscribe();

forkJoin(
  numeros$,
  intervalo$,
  letras$
).subscribe(resp => {
  console.log("Numeros ", resp[0]);
  console.log("Intervalo ", resp[1]);
  console.log("Letras ", resp[2]);
});

forkJoin({
  numeros$,
  intervalo$,
  letras$
}).subscribe(console.log);

forkJoin({
  num: numeros$,
  int: intervalo$,
  letra: letras$
}).subscribe(console.log);