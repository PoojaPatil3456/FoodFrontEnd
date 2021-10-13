import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegisterComponent } from './components/register/register.component';
import { RestoComponent } from './components/resto/resto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './components/adminhome/adminhome.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { AddmenuComponent } from './components/addmenu/addmenu.component';
import { CartComponent } from './components/cart/cart.component';
//import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
//import {AuthGuardService} from './auth-guard.service';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RestoComponent,
    MenuComponent,
    FilterPipe,
    AdminloginComponent,
    AdminhomeComponent,
    ViewordersComponent,
    AddmenuComponent,
    CartComponent,
    SigninComponent,
   // SocialLoginModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [/*{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('551636485649-e2mud4i2gdsi7vufa55j5anbnmasf5ss.apps.googleusercontent.com')
        }
      ]
    }
  },
AuthGuardService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
