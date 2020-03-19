import { filter, mapTo, delay } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export default (action$: any) => action$.pipe(
    ofType('PING'),
    delay(1000),
    mapTo({ type: 'PONG' })
);
