import { fromEvent } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';



const click$ = fromEvent<MouseEvent>(document, 'click');

/* Map es solo para obtener los valores del objeto general, el tap es para mostrar los valores que van pasando por el pipe, y el audittime hace que espere 2 segundos desde que se ejecuto el valor y si durante esos dos segundo se ejecutaron mas valore, mostrar el ultimo de estos*/
click$.pipe(
  map(({ x }) => ({ x })),
  tap(val => console.log("Val ", val)),
  auditTime(2000)
).subscribe(console.log)
