import { ajax } from 'rxjs/ajax';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const data = ajax({
    url: 'http://localhost:3000/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: {
        rxjs: 'Hello World!'
    }
}).pipe(
    map(loginResponse => {
        console.log('loginResponse', loginResponse);

        return loginResponse;
    }),
    catchError(error => {
        console.log('error', error);

        return of(error);
    })
);
export default data;
