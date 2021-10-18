import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

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
  constructor(private router:Router,private user:RestaurantService) { }

  ngOnInit(): void {
  }
  admin(){
    this.router.navigate(['admin']);
  }
  signUp(){
    this.router.navigate(['register']);
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
}
