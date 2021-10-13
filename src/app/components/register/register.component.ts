import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private user:RestaurantService) { }

  ngOnInit(): void {
  }
  userInfo={
    name:"",
    email:"",
    password:"",
    contact:""
    }
    saveUser(n:NgForm){
         //console.log(this.userInfo);
         this.user.saveValues(this.userInfo).subscribe()

         alert("Data Saved Successfully")
    n.reset();
  }
}
