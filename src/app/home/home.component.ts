import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter:number = 0

  name: string = ""

  constructor() {
  
   }

  ngOnInit(): void {
  }

  countClick = () => {
    this.counter++
  }  

  setClasses() {
    let myClasses = {
      active: this.counter > 4,
      notActive: this.counter <= 4
    }
    return myClasses
  }

}
