import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from "@angular/core";

@Injectable()
export class HttpService {



    constructor(private _http: Http) { } // Injecting the Http Service

    sendData(isCreate,data): Observable<Object> {
        let encoded_data = JSON.stringify({ data });


        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(("./sendOrder"),encoded_data, options).map(
            (res: Response) => res.json() || {}
        );

    }
}
