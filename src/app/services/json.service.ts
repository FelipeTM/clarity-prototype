import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class JSONService {

    constructor(private http: HttpClient) {}

    public getJSON(): Observable<any> {
        return this.http.get("./assets/characters.json")
    }

}