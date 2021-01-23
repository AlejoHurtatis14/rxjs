import { fromEvent, interval } from "rxjs";
import { concatMap, exhaustMap, take } from "rxjs/operators";



const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

/* El exhaustmap solo permite tener una suscripcion activa y no deja activar la siguiente hasta que termine la primera, solo los emite activar si termino el anterior, ni siquiera lo deja en cola como el concat*/
click$.pipe(
  exhaustMap(() => interval$)
).subscribe(console.log);