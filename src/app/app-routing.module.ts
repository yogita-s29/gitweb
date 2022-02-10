import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [

  { path: '', component: HomeComponent },

  { path: 'about', component: AboutComponent },

  { path: 'login', component: LoginComponent },
  {path:'contact', component: ContactComponent},
 
 
 ];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }



/*

const routes: Routes = [

  { path: 'heroes', component: HeroesComponent }

];
*/