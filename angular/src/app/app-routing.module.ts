import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ListuserComponent} from './listuser/listuser.component';
import {AdduserComponent} from './adduser/adduser.component';


const routes:Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent  },
  { path: 'list-user', component: ListuserComponent  },
  { path:'add-user', component:AdduserComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
