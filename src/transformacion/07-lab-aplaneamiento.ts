import { fromEvent, of } from 'rxjs';
import { map, tap, mergeMap, pluck, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
  pluck('response', 'token'),
  catchError(err => of('Usuario no valido'))
)

// Creamos un formulario

const formulario = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

inputEmail.value = 'eve.holt@reqres.in';
inputEmail.type = 'email';

inputPass.value = 'cityslicka';
inputPass.type = 'password';

submitBtn.innerHTML = 'Ingresar';
submitBtn.type = 'submit';

formulario.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(formulario);

const submitForm$ = fromEvent(formulario, 'submit').pipe(
  tap(eve => eve.preventDefault()),
  map(evento => ({
    email: evento.target[0].value,
    password: evento.target[1].value
  })),
  mergeMap(peticionHttpLogin)
  /* Probar con mergeMap - switchMap - exhaustMap */
);

submitForm$.subscribe(token => {
  console.log("Token ", token);
});

