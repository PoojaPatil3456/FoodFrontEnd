import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  userInfo={
    userEmail:"",
    password:"",   
    }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validateAdmin(){
    if(this.userInfo.userEmail == "admin" && this.userInfo.password == "admin@123"){
      this.router.navigate(['adminhome'])
    }
    else{
      alert("Please enter valid credentials")
    }
  }
}
