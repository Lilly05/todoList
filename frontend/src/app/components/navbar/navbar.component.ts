import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navbarActive: boolean = true;

  onNavbar(){
    if(this.navbarActive){
      this.navbarActive = false;
    }else{
      this.navbarActive = true;
    }
  }
}
