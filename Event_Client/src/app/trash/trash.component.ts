import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { RestApiService } from '../services/rest-api.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {
  trashEvents:any;

  constructor(private data:DataService,private rest:RestApiService) { }

  ngOnInit(): void {
    this.getTrash()

  }


  async getTrash(){
    try{
      const data:any=await this.rest.get(`http://localhost:3000/api/main/trash-view/${this.data.user._id}`)
          console.log("trashview",data.doc);
          this.trashEvents=data.doc
          
    }catch(error){

    }


  }



  async deleteTrash(id:any){
    const data=await this.rest.delete(`http://localhost:3000/api/main/trashdelete/${id}`)
        console.log(data);
        this.getTrash()
  }

}
