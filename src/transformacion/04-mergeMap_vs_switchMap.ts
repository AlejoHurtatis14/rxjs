import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

const $click = fromEvent(document, 'click');
const $interval = interval(1000);

/* Con el mergemap mantiene todas las suscripciones activas posibles y se ejecutan todas al tiempo */
$click.pipe(
  mergeMap(() => $interval)
).subscribe(console.log);

/* Con el switchMap solo podemos tener una asuscripcion activa en el momento, es decie que si antes habia una instancia activa y se genera otra, la ultima se termina y se crea la nueva */
$click.pipe(
  switchMap(() => $interval)
).subscribe(console.log);