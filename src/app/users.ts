import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {
  constructor(private http:HttpClient){}
   private apiUrl = 'https://jsonplaceholder.typicode.com/users'

   getUsers():Observable<any>{
    return this.http.get<any>(this.apiUrl);
   }
}
