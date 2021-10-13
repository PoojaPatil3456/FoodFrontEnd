import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmenuComponent } from './components/addmenu/addmenu.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './components/register/register.component';
import { RestoComponent } from './components/resto/resto.component';
import { SigninComponent } from './components/signin/signin.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
//import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
//import {AuthGuardService} from './auth-guard.service';
const routes: Routes = [
  {path:'',component:HomeComponent},
  //{path:'loginpage',component:LoginComponent},
  {path:'loginpage',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'resto',component:RestoComponent},
  {path:'menu',component:MenuComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'adminhome',component:AdminhomeComponent},
  {path:'vieworders',component:ViewordersComponent},
  {path:'addmenu',component:AddmenuComponent},
  {path:'cart',component:CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
