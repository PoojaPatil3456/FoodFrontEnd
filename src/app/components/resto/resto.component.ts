import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.scss']
})
export class RestoComponent implements OnInit{
  filteredString:string='';
  getRestaurants=[{name:"",
    location:"",
    menu:[]}];
  constructor(private allResto:RestaurantService,private router:Router) { }
  ngOnInit(): void {
    this.allResto.getRestaurants().subscribe(data=>this.getRestaurants=data)
    console.log(this.getRestaurants);
    
  }
  navigateToMenu(clickedHotel:any){
    this.allResto.selectedHotel=clickedHotel;
    //console.log(this.allResto.selectedHotel);
    this.router.navigate(['menu'],{state:{data:{clickedHotel}}});
  }
}
