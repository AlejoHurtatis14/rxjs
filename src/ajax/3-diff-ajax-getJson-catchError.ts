import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org/delay/1';
const git = 'https://api.github.com/users?per_page=5';

const manejarError = (resp: AjaxError) => {
  console.warn("Error ", resp.message);
  return of({
    ok: false,
    usuarios: []
  })
}


/* COn getJson Podemos hacer peticiones ajax y al mismo tiempo enviarles los headers respectivos de la consulta */
const obs$ = ajax.getJSON(url).pipe(
  catchError(manejarError)
);
const obsGit$ = ajax(url).pipe(
  catchError(manejarError)
);

obs$.subscribe(data => console.log("Dataa ", data));
obsGit$.subscribe(lol => console.log("Lol ", lol));


/* Para que salga error se debe dañar la url y quitar el catchError, si lo dejamos por tanto se controlando el error con la url mala y se ejecutaria el oberserver normal y se completaria */
const funciona$ = ajax.getJSON(url);

funciona$.pipe(
  catchError(manejarError)
).subscribe({
  next: bien => console.log("Bien ", bien),
  error: er => console.log("Error ", er),
  complete: () => console.log("Completado")
});