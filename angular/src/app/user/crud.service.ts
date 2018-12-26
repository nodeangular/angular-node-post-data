import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  baseUrl : string = "http://localhost/crudphp/response/list-response.php";
  constructor(private http:HttpClient) { }

  getAllUser(){
    //console.log(this.http.get<User[]>(this.baseUrl));
    return this.http.get<User[]>(this.baseUrl);
  }

  addUser(User){
    return this.http.post<User>('http://localhost/crudphp/response/add-user-response.php',User);
  }
}
