import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delay/1';

const manejarError = (resp: AjaxError) => {
  console.warn("Error ", resp.message);
  return of({
    ok: false,
    usuarios: []
  })
}


/* Peticion get */
const obs$ = ajax.get(url, {}).subscribe(console.log);

/* Peticion post */
const post$ = ajax.post(url, {
  data: 'informacion del body',
  nombre: 'Alejandro',
  edad: 20
}, {
  'header': 'valor'
}).subscribe(console.log);

/* Peticion post */
const delete$ = ajax.delete(url, {
  'header': 'valor'
}).subscribe(console.log);

/* Otra manera de usuarlo */
ajax({
  url: url,
  method: 'PUT',
  headers: {
    'header': 'valor'
  }, body: {
    data: 'informacion del body',
    nombre: 'Alejandro',
    edad: 20
  }
}).subscribe(console.log);