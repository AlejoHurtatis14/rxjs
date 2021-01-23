import { from, of } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';
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
  distinctUntilKeyChanged('nombre')
).subscribe(console.log);

