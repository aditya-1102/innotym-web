import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }    
  createUser(model):Observable<User>{
    return this.http.post<User>('http://localhost:3000/api/users/signup',model);
  }
  loginUser(model):Observable<User>{
    return this.http.post<User>('http://localhost:3000/api/users/login',model);
  }
  updateUser(model):Observable<User>{
    return this.http.put<User>('http://localhost:3000/api/users/'+model._id,model);
  }
  deleteUser(id):Observable<User>{
    return this.http.delete<User>('http://localhost:3000/api/users/'+id);
  }
}
