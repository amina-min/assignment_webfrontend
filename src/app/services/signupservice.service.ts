import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http:HttpClient) { }

  addUser(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:9005/api/ex/user/user_add', data);
  }
}
