import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from './Restaurant';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Orders } from './Orders';
import { Menu } from './Menu';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
private URL:string="http://localhost:8080/hotel/getAllHotels";
private saveUserURL:string="http://localhost:8080/user/addUser";
private loginURL:string="http://localhost:8080/user/getUserByEmail";
private placeOrderURL:string="http://localhost:8080/order/addOrder"
private restoURL:string="http://localhost:8080/hotel/getHotelByName";
private getOrderURL:string="http://localhost:8080/order/getAllOrders"
private deleteURL:string="http://localhost:8080/order/deleteOrder";
private addMenuURL:string="http://localhost:8080/hotel/addFoodItem";
private uploadMenuImage:string="http://localhost:8080/hotel/upload";
public selectedHotel:any;
public allHotels:any=[];
public cartItems:any=[];
public currentUserEmail:string="";
public response:any;
constructor(private http:HttpClient) { }
getRestaurants(): Observable<Restaurant[]>
{
  var response=this.http.get<Restaurant[]>(this.URL);
  this.allHotels=response;
  return response;
}
saveValues(userInfo:User){
  return this.http.post<User>(this.saveUserURL,userInfo)
}
getUser(userInfo:any):Observable<User>{
  //console.log(userInfo.userEmail)
  this.currentUserEmail=userInfo.userEmail;
return this.http.get<User>(this.loginURL+"/"+userInfo.userEmail)
}

placeOrder(orderSummary:any){
  return this.http.post<User>(this.placeOrderURL,orderSummary)
}
getRestaurantByName(restaurant:any){
  //console.log(this.restoURL+"/"+restaurant.name);
  return this.http.get<Restaurant>(this.restoURL+"/"+restaurant.name)

}
getOrders():Observable<Orders[]>{
  //console.log("All Orders:",this.http.get<Orders[]>(this.getOrderURL));
  return this.http.get<Orders[]>(this.getOrderURL)
}
deleteOrderFromDatabase(orderID:string){
  return this.http.delete<Orders>(this.deleteURL+"/"+orderID)
}
addHotelMenu(Menu:Menu,selectedName:string,image:any) {
  var fd = new FormData();
  fd.append('file',image)
  this.http.post(this.uploadMenuImage,fd);
  console.log(this.response);
  return this.response;
  // return this.http.post<Menu>(this.addMenuURL+"/"+selectedName,Menu)
}

uploadToFirebase(){
  return "";
}
}

