import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

//   isLoggedIn = false;

// isAuthenticated(){
//     return this.isLoggedIn;
//   }
  constructor(private httpclient:HttpClient) { }
  
 
}


// getUser(data:user){
//   this.httpclient.get();
// }


