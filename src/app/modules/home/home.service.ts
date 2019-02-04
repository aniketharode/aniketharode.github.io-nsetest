import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Injectable(
    {
        providedIn: 'root'
      }
)
export class HomeService {

    constructor(private http: HttpClient) { 

    }

    getUser():any{
        
    }
}