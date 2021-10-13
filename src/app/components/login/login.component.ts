import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { User } from 'src/app/user';
import {GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private user:RestaurantService,private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
  }
  userInfo={
    userEmail:"",
    password:"",   
    }
   loginUser:User={
    name:"",
    email:"",
    password:"",
    contact:""
   }
      
  /*goToAdmin(){
    this.router.navigate(['admin']);
  }*/
  signUp(){
    this.router.navigate(['register']);
  }
  admin(){
    this.router.navigate(['adminlogin']);
  }
  validate(){ 
    //console.log(this.userInfo);
    this.user.getUser(this.userInfo).subscribe(data=>this.loginUser=data)
    //console.log(this.loginUser);
    if(this.userInfo.password == this.loginUser.password){
      this.router.navigate(['resto'])
    }
    else{
      alert("Please enter valid credentials")
    }
  }
  /*loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['resto']));
  }*/
}
