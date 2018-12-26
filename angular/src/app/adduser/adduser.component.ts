import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CrudService} from '../user/crud.service';
import {MessageService} from '../message/message.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  addform : FormGroup;
  submit:boolean = false;
  constructor(private addBuilder:FormBuilder,private crudService:CrudService,private messageService:MessageService,private router:Router) { }

  ngOnInit() {
    this.addform = this.addBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

  submitted():any{
    this.submit = true;
    if(this.addform.invalid){
      return false;
    }
    this.crudService.addUser(JSON.stringify(this.addform.value))
    .subscribe(
      data=>{
        //console.log(JSON.stringify(data));
        this.messageService.addMessage("User Added successfully");
        this.router.navigate(['list-user']);
      });
  }


}
