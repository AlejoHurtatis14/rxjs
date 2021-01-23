

/* Con el merge se ejecuta los observables al tiempo y si se completa uno de los observables no se ejecuta el complete de la suscripcion hasta que todo se los observables se completen */

import { fromEvent, merge } from "rxjs";
import { pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');


merge(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))
).subscribe(console.log);