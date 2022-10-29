import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {

  AddEvent:any =this.fb.group({
    user:[{value:this.data.user._id}],
    eventname:[''],
    eventdescription:[''],
    startdate:[''],
    enddate:[''],
    eventtype:[''],

  })

  constructor(public data:DataService,private fb:FormBuilder,private rest:RestApiService,private route:Router) { }

  ngOnInit(): void {

  }

  async addEvent(){
    try{
      console.log("enter value",this.AddEvent.value.user.value);
      const data:any =await  this.rest.post("http://localhost:3000/api/main/addevent",{
        user:this.AddEvent.value.user.value,
        eventname:this.AddEvent.value.eventname,
        eventdescription:this.AddEvent.value.eventdescription,
        startdate:this.AddEvent.value.startdate,
        enddate:this.AddEvent.value.enddate,
        eventtype:this.AddEvent.value.eventtype
      })
      console.log("dataaa",data);
         this.route.navigate(['/profile'])
      

    }catch(error){

    }
 
    
    

    

  }

}
