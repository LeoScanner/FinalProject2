import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }



  getUsers(): Observable<any>{
    return this.http.get<[]>("http://localhost:8080/api/users")
  }

  postUser(user: any){
    return this.http.post<[]>("http://localhost:8080/api/user", user)
  }
}
