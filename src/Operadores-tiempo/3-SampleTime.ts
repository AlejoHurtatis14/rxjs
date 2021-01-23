import { fromEvent } from "rxjs";
import { map, sampleTime } from "rxjs/operators";

const click$ = fromEvent<MouseEvent>(document, 'click');

/* El sample time lo que hace es que espera ese lapso de tiempo para volver a emitir el valor de la suscripcion */

click$.pipe(
  sampleTime(2000),
  map(({ x, y }) => ({ x, y }))
).subscribe(console.log);
