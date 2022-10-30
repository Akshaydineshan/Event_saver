import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  messageType = ""
  message = ""
  user: any
  isUserVerified=new BehaviorSubject<boolean>(false)
  editValues:any


  constructor(private rest: RestApiService) { }

  error(message: string) {
    this.messageType = "danger"
    this.message = message;
  }

  success(message: string) {


    this.messageType = "success"
    this.message = message;
  }
  warning(message: string) {
    this.messageType = "warning"
    this.message = message;
  }

  //get profile
  async getProfile() {
    console.log("inside get profile");

    try {
      console.log("inside get profile try");
      if (localStorage.getItem("token")) {
        console.log("inside if");

        const data: any = await this.rest.get("http://localhost:3000/api/account/profile")
        
         if(data){
          this.user = data['user']
          this.isUserVerified.next(true)
          console.log(this.user);
  

         }
       


      }

    } catch (error) {
      console.log(error);


    }
  }





}
