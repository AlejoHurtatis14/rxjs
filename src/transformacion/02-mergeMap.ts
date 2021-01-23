import { interval, of, fromEvent } from 'rxjs';
import { map, mergeMap, take, takeUntil } from "rxjs/operators";


const letras$ = of('a', 'b', 'c', 'd', 'e');

letras$.pipe(
  mergeMap(letra => interval(1000).pipe(
    /* Take es el limite de ejcuaciones de observable */
    map(i => letra + i),
    take(3)
  ))
)
/* .subscribe({
  next: val => console.log("Next ", val),
  complete: () => console.log("COmpletado")
}) */

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseUp$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mouseDown$.pipe(
  /* Se maneja varios observables al tiempo, y hasta que no se completen todos nunca se terminaran, por cada ejecucion queda un observable aparte */
  mergeMap(() => interval$.pipe(
    takeUntil(mouseUp$)
  )),
).subscribe(console.log)