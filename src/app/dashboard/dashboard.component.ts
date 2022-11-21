import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../userservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  store:any=[];
  data:any;
  resp:any;
  name:any;
  email:any;
  gender:any;
  status:any;
  id:any;
  resdata:any;
  description:any;
  vehicle_class:any;
  length:any;
  pilot:any;
  constructor(public service: UserservicesService) {
    this.store= [{name:"frok", size:32, price:300, img:"./assets/images/frok.jpg"}, {name:"shirt", size:34, price:200, img:"./assets/images/shirt.jpg"}, {name:"jeans", size:34, price:1000, img:"./assets/images/jeans.jpg"}];
   }


  ngOnInit() {
  //  this.showdata()

    // this.service.getdata().subscribe(
    //   (response) => { 
    //     this.resp = response; 
    //     this.data = this.resp.entries;
    //     console.log("geetha data", this.data)
    //   },
    //   (error) => { console.log(error); });
   
   
    // this.service.getargs().subscribe(
    //   (response) => { 
    //     this.resp = response; 
    //     this.data = this.resp.headers;
    //     console.log("data", this.data)
    //   },
    //   (error) => { console.log(error); });

  }

showdata(){
  this.service.getrandom().subscribe(
    (response) => { 
      this.resp = response; 
      this.data = this.resp.results;
      console.log("geetha data", this.data)
    },
    (error) => { console.log(error); });
}

searchid(){ 
  console.log("print",this.name)
  this.service.bio(this.id).subscribe(
    (response) => { 
      this.resdata = response; 
      console.log("id", this.resdata)
    },
    (error) => { console.log(error); });
  
}

// postdata(){
//   if (this.name=="" || this.name==undefined){
//     alert("please enter your name")
//   }
//   else if (this.email=="" || this.name==undefined){
//     alert("please enter your email")
//   }
//   else if (this.gender=="" || this.gender==undefined)
//   alert("please enter your gender")

//   else if (this.status=="" || this.gender==undefined)
//   alert ("plase enter your status")
//   else {
//   console.log("print",this.name)
//   let obj = {name: this.name, email: this.email, gender: this.gender, status: this.status}

//   this.service.gorest(obj).subscribe(
//     (response) => { 
//       this.resp = response; 
//       console.log("post data", this.resp)
//       alert("Data submitted successfully and your id is "+this.resp.id)
//     },
//     (error) => { console.log(error); });
//   }
// }
vehicledata(){
if (this.name=="" || this.name==undefined){
  alert("please enter vehilce name")
}
else if (this.description=="" || this.description==undefined){
  alert("please enter vehicle description")
}
else if (this.vehicle_class=="" || this.vehicle_class==undefined){
  alert("please enter your vehicle_class")
}
else if (this.length=="" || this.length==undefined){
  alert("plaease enter your vehicle lenght")
}
else if (this.pilot=="" || this.pilot==undefined){
  alert("please enter pilot url")
}
else {
  let obj ={name: this.name, description: this.description, vehicle: this.vehicle_class, lenght: this.length}

  this.service.locatevehicles(obj).subscribe(
    (response) => { 
      this.resp = response; 
      console.log("post vehicledata", this.resp)
      alert("Data submitted successfully and your id is "+this.resp.id)
    },
    (error) => { console.log(error); });
}
}



  showdress(name){
    console.log("dress model", name)
  }
  



}
