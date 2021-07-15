import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/Services/Login.service';
import { RouteReuseStrategy, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user : any ={};
  img? : string;
  loginform : any;

  constructor(private lgnsrvc : LoginService,
              private route : Router,
              private routes : ActivatedRoute) { }

  ngOnInit(): void {
    this.img = "../../assets/Background/bgimage2.png";
    
  }
  checkLogin(loginForm : NgForm)
  {
    if(loginForm.value.email === 'user@user.com' && loginForm.value.password == "user"
     || loginForm.value.email === 'USER@USER.com' && loginForm.value.password == "USER" )
    {
      console.log("user logged in");
      //this.route.navigate(['/ManageAirlines']);
      console.log("User Logged In");
   
    }
    else if(loginForm.value.email == "ADMIN@ADMIN.com" || loginForm.value.email == 'admin@admin.com')
    {
      console.log("Admin logged in");
      //console.log("Admin logges In");
      //this.route.navigate(['/ManageAirlines']);
    }
    else{
      console.log("Enter a valid username");
    }
    loginForm.reset();
    
   //

    
  }

  

}