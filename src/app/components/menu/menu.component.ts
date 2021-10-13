import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
selectedOne:any=[];
  constructor(private resto:RestaurantService,private router:Router) { }

  ngOnInit(): void {
    this.selectedOne=this.resto.selectedHotel
  }
  addItem(menuItem:any){
    this.resto.cartItems.push(menuItem);
    alert("Item Added to cart")
    //console.log(this.resto.cartItems);
  }
  viewCart(){
    this.router.navigate(["cart"]);
  }

}
