import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';



@NgModule({

  declarations: [

    LoginComponent

  ],

  imports: [

    BrowserModule,

    LoginRoutingModule,

    ReactiveFormsModule

  ],

  providers: [],

  bootstrap: [LoginComponent]

})

export class LoginModule { }