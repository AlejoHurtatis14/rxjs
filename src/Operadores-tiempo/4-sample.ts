import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';




const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

/* El interval es el primer observable en donde se ejecuta cada 500, si ese no ha ejecutado ningun valor durante ese lapso de tiempo, el sample no dejara sehuir con el evento click, pero si el intervale se ejecuta y se ejecuta el click, la suscripcion funcionara. */
interval$.pipe(
  sample(click$)
).subscribe(console.log);