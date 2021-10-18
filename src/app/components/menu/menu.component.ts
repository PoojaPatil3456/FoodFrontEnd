import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
selectedOne:any;
  constructor(private resto:RestaurantService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //console.log(history.state);
    this.resto.getRestaurantByName(history.state.data.clickedHotel).subscribe(data=>this.selectedOne=data)
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
