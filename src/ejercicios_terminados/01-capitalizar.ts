/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { from, of } from "rxjs";
import { map, tap } from 'rxjs/operators';

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() => {

  const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

  const observable$ = from(nombres);

  const capitalizar = (nombre) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

  observable$.pipe(
    map(capitalizar)
  ).subscribe(console.log);

  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
  /* for( let nombre of nombres ) {
    console.log( capitalizar(nombre) )
  } */







})();

