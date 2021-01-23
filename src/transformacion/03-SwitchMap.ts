import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { debounceTime, map, mergeAll, pluck, mergeMap, switchMap } from 'rxjs/operators';
import { GitHubResponse, UserGit } from '../interfaces/github-user-interface';

const mostrarusuarios = (usuarios: UserGit[]) => {
  olList.innerHTML = '';

  for (const usuario of usuarios) {
    const itemList = document.createElement('li');
    const imgList = document.createElement('img');
    imgList.src = usuario.avatar_url;

    const anchorA = document.createElement('a');
    anchorA.href = usuario.html_url;
    anchorA.text = 'Ver Pégina';
    anchorA.target = '_blank';

    itemList.append(imgList, usuario.login + " ", anchorA);

    olList.append(itemList);

  }

}

const body = document.querySelector('body');
const textInput = document.createElement('input');
const olList = document.createElement('ol');

body.append(textInput, olList);

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime<KeyboardEvent>(500),
  pluck<KeyboardEvent, String>('target', 'value'),
  /* Retorna un observable, eso quiere decir que toca suscribirse de nuevo en la respuesta al primer subscribe pero con el mergeAll se suscribe a los orbersables y hace que la respuesta sea mas limpia, de esa manera nos sirve para tener un solo subscribe */
  mergeMap<String, Observable<GitHubResponse>>(event => ajax.getJSON(`https://api.github.com/search/users?q=${event}`)),
  pluck<GitHubResponse, UserGit[]>('items')
);//.subscribe(mostrarusuarios);

/* Con el merge map lo que hace es que mapea todo pero y ejecuta una consulta por cada letra que se busque de mas */
const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
  pluck<KeyboardEvent, String>('target', 'value'),
  mergeMap(texto => ajax.getJSON(url + texto))
);//.subscribe(console.log);

/* Con el switch map lo que pasa es que se ejecuta una petticion y se crea un observable pero si inmediatamente se busca una letra demas, el observable anterior se cancela y cancelas las peticiones */

input$.pipe(
  pluck<KeyboardEvent, String>('target', 'value'),
  switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);