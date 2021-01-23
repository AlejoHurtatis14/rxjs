import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from 'rxjs/operators';


console.log('Hola Mundo!');


const number$ = of<number | string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');


number$.pipe(
  distinctUntilChanged()
).subscribe(console.log);

interface Personaje {
  nombre: String;
}

const Personajes: Personaje[] = [{
  nombre: 'Megaman'
}, {
  nombre: 'Megaman'
}, {
  nombre: 'X'
}, {
  nombre: 'Zero'
}, {
  nombre: 'Zero'
}, {
  nombre: 'Dr. Willy'
}];

/* Si el distinctUntilChanged retorna true, quiere decir que se bloqeua y no lo deja pasar, ejecuta si la ultima es diferente a la actual */
from(Personajes).pipe(
  distinctUntilChanged((ant, act) => ant.nombre === act.nombre)
).subscribe(console.log);

