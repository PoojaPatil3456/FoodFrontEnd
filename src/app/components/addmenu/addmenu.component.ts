import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent implements OnInit {

  hotelnames=[{name:"",
  location:"",
  menu:[]}];;
  Menu={
    name:"",
    type:"",
    description:"",
    price:"" 
    }
    selectedName="";
    image:any;
  constructor(private menu:RestaurantService) { }

  ngOnInit(): void {
    this.menu.getRestaurants().subscribe(data=>this.hotelnames=data)
  }
  onFileSelect(event:any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
      console.log(this.image);
    }
  }
  addMenu(n:NgForm){    
    this.menu.addHotelMenu(this.Menu,this.selectedName,this.image).subscribe()
  }
  uploadImage(){
    
  }
}
