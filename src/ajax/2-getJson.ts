import { ajax } from 'rxjs/ajax';


const url = 'https://httpbin.org/delay/1';

/* COn getJson Podemos hacer peticiones ajax y al mismo tiempo enviarles los headers respectivos de la consulta */
const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'mi-token':'Alejo123*'
});

obs$.subscribe(data => console.log("Dataa ", data));