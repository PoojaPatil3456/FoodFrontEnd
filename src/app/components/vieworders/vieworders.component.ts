import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.scss']
})
export class ViewordersComponent implements OnInit {

  userOrders=[{
    userEmail:"",
    foodList:[],
    quantity:{},
    price:0
  }];
  constructor(private allOrders:RestaurantService) { }

  ngOnInit(): void {
    this.allOrders.getOrders().subscribe(data=>this.userOrders=data)
    console.log(this.userOrders);
  }

}
