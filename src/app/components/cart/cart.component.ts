import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartMenu:any=[];
  totalPrice:number=0;
  quantity:any={};
  

  constructor(private resto:RestaurantService,private router:Router) { }

  ngOnInit(): void {
    this.cartMenu=this.resto.cartItems;
    this.calculatePrice();
    this.initailizeQunitity();
  }
  onRemove(name:any){
    this.cartMenu.forEach((element:any,index:any) => {
      if(element.name==name){
        
        this.totalPrice=this.totalPrice - (element.price*this.quantity[element.name]);
        this.cartMenu.splice(index,1);
      }
    });  
  }
  initailizeQunitity(){
    this.cartMenu.forEach((element:any) =>{
      this.quantity[element.name]=1;
    });
  }
  increaseQuntity(item:any){
    this.quantity[item.name] = ++this.quantity[item.name];
    this.totalPrice=this.totalPrice+item.price;
    console.log(this.quantity);
  } 
  
  decreaseQuntity(item:any){
    if(this.quantity[item.name] <= 1){
      this.onRemove(item.name);
    }else{
      this.quantity[item.name] = --this.quantity[item.name];
      this.totalPrice=this.totalPrice-item.price;
    }
  }
  
  calculatePrice(){
    this.cartMenu.forEach((element:any,index:any) => {
      this.totalPrice=this.totalPrice+element.price;
    });
    console.log("Total",this.totalPrice);
  }
  
  saveOrder(){
    var orderObject={
      "userEmail":this.resto.currentUserEmail,
      "foodList":this.cartMenu,
      "quantity":this.quantity,
      "price":this.totalPrice+50
    };
    this.resto.placeOrder(orderObject).subscribe()
    var r=confirm("Do you want to confirm order")
    if (r == true) {
      alert("order placed")
      this.router.navigate(['resto']);
    } 
  }
}
