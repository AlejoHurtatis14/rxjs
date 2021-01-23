import { concat, interval, of } from "rxjs";
import { take } from "rxjs/operators";


const interval$ = interval(1000);

/* Lo que se hace con el concat es concatenar observables para ejecutarlos en secuencia, se debe ejecutar en linea de tiempo. */

concat(
  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  [1, 2, 3, 4, 5],
  of(5, 4, 3, 2, 1)
).subscribe(console.log);