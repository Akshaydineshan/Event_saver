import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  events: any
  filterValue:any='All'
  constructor(public data: DataService, private rest: RestApiService) { }

  checkedradio(data: any){
    this.filterValue = data
  }


  ngOnInit(): void {
   
    this.getevent()
   



  }

  async getevent() {
    try {
      const data: any = await this.rest.get(`http://localhost:3000/api/main/viewevent/${this.data.user._id}`)
      this.events = data.doc
      console.log("data to vie event", data.doc);




    } catch (error) {

    }

  }



  async delete(id: any) {
    console.log("1");

    try {
      const data: any = await this.rest.delete(`http://localhost:3000/api/main/delete/${id}`)
      console.log("deleted res", data);

      this.getevent()
      if (data['success']) {
        console.log("22222");

        const delData: any = await this.rest.post("http://localhost:3000/api/main/trash", data.delData)
        console.log("aaaaaaaaaaaaaaaa", delData);


      }





    } catch (error) {
      console.log(error);


    }

  }

  editValue(data: any) {
    console.log("data", data);
    this.data.editValues = data


  }


  //filter

  countAll(){
    return this.events.length;
  }

  countOffitial(){
    return this.events.filter((val:any)=>{
      return val.eventtype =="offitial"
    }).length
  }

  countPersonal(){
    return this.events.filter((val:any)=>{
      return val.eventtype=="personal"
    }).length
  }

}
