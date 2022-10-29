import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  EditEvent:any =this.fb.group({
    user:[{value:this.data.user._id}],
    eventname:[''],
    eventdescription:[''],
    startdate:[''],
    enddate:[''],
    eventtype:[''],

  })

  constructor(private data:DataService,private fb:FormBuilder,private route:ActivatedRoute,private rest:RestApiService) { }

  ngOnInit(): void {
    this.EditEvent.patchValue(this.data.editValues)
  }

  async editEvent(){
    let idd=this.route.snapshot.paramMap.get('id')
    const data=await this.rest.put(`http://localhost:3000/api/main/edit/${idd}`,this.EditEvent.value)
    console.log("2222222222",data);
    

   
   
 
    

  }
}
