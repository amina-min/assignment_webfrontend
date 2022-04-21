import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient) {}

  userLogin(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:9005/api/ex/user/user_login', data);
  }

  resetPassword(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:9005/api/ex/user/reset_password ', data);
  }
  updatePassword(data: any): Observable<any>{
    return this.http.put<any>('http://localhost:9005/api/ex/user/update_password', data);
  }
  

}
