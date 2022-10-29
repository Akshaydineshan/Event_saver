import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event_Client';
 token:boolean=false
  constructor(public data:DataService,private router:Router){
    if(localStorage.getItem("token")){
      this.token=true;
     }
    data.getProfile();
  

  }


  logout(){
    alert(confirm(`${this.data.user.name} Are you sure to logout `))
    this.data.user={}
    localStorage.clear()
    this.router.navigate(['/signin'])
  

  }
}
