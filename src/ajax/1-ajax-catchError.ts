import { catchError, pluck } from "rxjs/operators";
import { ajax, AjaxError } from "rxjs/ajax";
import { of } from "rxjs";


/* Api github */
const url = 'https://api.github.com/users?per_page=5';

/* Manejo de los errores de fetch */
const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

const atrapaError = (err: AjaxError) => {
  console.warn("Error en ", err.message);
  return of([]);
}

const fetchPromesa = fetch(url);
/* Valida que despues de la respuesta tomarla en una promesas  */
fetchPromesa
  .then(console.log)
  .then(data => console.log("Dataaa  ", data))
  .catch(console.log);


  /* Hacemos peticiones ajax y con catch error podemos mapilar los errore, debe retornar una observable para poder funcionar ya que eso es lo que necesita */
ajax(url).pipe(
  pluck('response'),
  catchError(atrapaError)
).subscribe(usu => console.log("Usuarios ", usu));