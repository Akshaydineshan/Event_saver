import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http:HttpClient) { }

  getHeaders(){
    const token =localStorage.getItem("token");
   
  //  const header =new HttpHeaders()
   return token? new HttpHeaders().append("auth-head",token):undefined;

  }


  get(link:string){
    // console.log("restapi inside ",this.getHeaders());
    
    return this.http.get(link,{headers:this.getHeaders()}).toPromise()
  }

  post(link:string,body:any,){
    console.log("2222222222");
    
     return this.http.post(link,body,{headers:this.getHeaders()}).toPromise()
  }


  delete(link:string){
    console.log("3");
     return this.http.delete(link,{headers:this.getHeaders()}).toPromise()
  }

  put(link:string,body:any){
    console.log(body,link);
    
    return this.http.put(link,body,{headers:this.getHeaders()}).toPromise()

  }
}
