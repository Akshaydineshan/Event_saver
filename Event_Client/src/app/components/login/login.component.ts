import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: any = this.fb.group({
    email: [''],
    password: ['']
  })

  constructor(private rest: RestApiService, private fb: FormBuilder, private data: DataService,private router:Router) { }

  ngOnInit(): void {
  }

  async Login() {
    try {
      const data: any = await this.rest.post("http://localhost:3000/api/account/signin", {
        email: this.LoginForm.value.email,
        password: this.LoginForm.value.password,

      });
      if (data["success"]) {
        localStorage.setItem("token", data["token"]);
        await this.data.getProfile()
        this.router.navigateByUrl('/home')

      }


    } catch (error) {
      console.log(error);

    }
  }

}
