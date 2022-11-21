import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  url: any="https://api.publicapis.org/entries";
  url1:any="https://randomuser.me/api/";
  url2:any="https://api.agify.io/?name=";
  url3:any="https://datausa.io/api/data?drilldowns=Nation&measures=Population";
  url4:any="https://gorest.co.in/public/v2/users";
  url5:any="https://httpbin.org/get";
  url6:any="https://ghibliapi.herokuapp.com/locations"

  constructor(public http : HttpClient) { }


  getdata() {
    return this.http.get(this.url);
  }
  getrandom(){
    return this.http.get(this.url1)
  }
  bio(id){
    console.log("bio",id)
    return this.http.get(this.url4+"/"+id)
  }
  pollution(){
    return this.http.get(this.url3)
  }
  gorest(obj){ 
    console.log("gorest")
    return this.http.post(this.url4,obj)
  }
  getargs(){
    return this.http.get(this.url5)
  }
  locatevehicles(obj){
    return this.http.post(this.url6,obj)
  }

}

