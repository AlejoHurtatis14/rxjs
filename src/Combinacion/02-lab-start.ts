import { ajax } from 'rxjs/ajax';
import { endWith, startWith } from 'rxjs/operators';

/* Referencias */
const loading = document.createElement('div');

loading.classList.add('loading');

loading.innerHTML = 'Cargando...!';

const body = document.querySelector('body');

/* Request */

ajax.getJSON('https://reqres.in/api/users/2?delay=3').pipe(
  startWith(true),
  //endWith(false)
).subscribe(respuesta => {
  if (respuesta) {
    body.append(loading);
  } else {
    document.querySelector('.loading').remove();
  }
})