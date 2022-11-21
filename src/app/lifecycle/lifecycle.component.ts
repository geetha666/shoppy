import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnChanges()	{
console.log("in ng on changes")
  }
  
  ngOnInit() {
    console.log("in ng on init")

  }

  ngDoCheck()	{
    console.log("in ng do check")

  }

  ngAfterContentInit() {
    console.log("in ng aftercontent init")


  }

  ngAfterContentChecked()	{
    console.log("in aftercontent checked")

  }

  ngAfterViewInit()	{
    console.log("in ng afterview init")


  }
  ngAfterViewChecked() {
    console.log("in ng afterview checked")


  }
  ngOnDestroy()	{
    console.log("in ng on destroy")


  }
  change(){
    this.router.navigate(["/register"])
  }
}
