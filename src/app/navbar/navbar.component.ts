import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  alertPop(){
    alert("Nothing to see here..")
  }

  homePage(){
    alert("Already on home page..")
  }

  ngOnInit(): void {
  }

}
