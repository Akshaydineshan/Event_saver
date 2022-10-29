import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegForm: any = this.fm.group({
    name: [''],
    email: [''],
    password: [''],
    cpassword: [''],
    phonenumber: [''],
    address: [''],
  })

  constructor(private fm: FormBuilder, private rest: RestApiService, private datas: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  async register() {
    try {
      console.log(this.RegForm);
      if (this.RegForm.value.password == this.RegForm.value.cpassword) {

        const data: any = await this.rest.post("http://localhost:3000/api/account/signup", {
          name: this.RegForm.value.name,
          email: this.RegForm.value.email,
          password: this.RegForm.value.password,
          phonenumber: this.RegForm.value.phonenumber,
          address: this.RegForm.value.address,

        });


        if (data['success']) {

         

          localStorage.setItem("token", data["token"])
          await this.datas.getProfile();
        
          this.datas.success("Registration success")
          this.router.navigate(['home'])




        } else {
          this.datas.error(data["message"])
        }

      }else{
        alert("password and confirm password not same")
        
      }
    } catch (error) {
      console.log(error);


    }
  }




}
