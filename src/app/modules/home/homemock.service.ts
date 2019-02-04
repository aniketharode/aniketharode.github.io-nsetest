import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from "rxjs"

@Injectable({providedIn: 'root'})
export class HomeMockService {
    constructor(private httpClient: HttpClient) { 
    this.getUser();
    }

    getUser():Observable<any>{
        return new Observable((obsever)=>{
            obsever.next({
                response:{
                    "key":'value'
                }
            });
        })
    }
    
}