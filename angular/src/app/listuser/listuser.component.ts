import { Component, OnInit } from '@angular/core';
import {CrudService} from '../user/crud.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users:User[] = [];
  constructor(private crudService:CrudService) { }

  ngOnInit() {
    this.getListUser();
  }

  getListUser(){
      this.crudService.getAllUser()
      .subscribe(data=>{
        console.log(data);
        this.users = data;
      });
  }

}
