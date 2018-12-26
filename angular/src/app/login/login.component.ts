import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthuserService} from "../user/authuser.service";
import {MessageService} from '../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  complexForm:FormGroup;
  submit:boolean = false;
  invalidlogin:boolean = false;

  constructor(private router:Router,private fb:FormBuilder,private authservice:AuthuserService,private message:MessageService) { }

  submitted():any{
    this.submit = true;
    if(this.complexForm.invalid){
      return false;
    }
    
    this.authservice.login(this.complexForm.controls.email.value,this.complexForm.controls.password.value)
    .subscribe(
        data => {
          console.log(data.email);
          if(data.email){
             this.message.addMessage("Login Successful");
             this.router.navigate(['list-user']);
          }
          else{
            this.invalidlogin = true;
            this.router.navigate(['login']);
            
          }
        },
        error => {
          console.log(error);
        });


  }

  ngOnInit() {
    this.complexForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }

}
