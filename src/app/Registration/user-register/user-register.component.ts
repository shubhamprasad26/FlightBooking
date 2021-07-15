import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/Services/Login.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
   img:string ="";

  constructor(private lgnsrvc : LoginService) { }

  ngOnInit(): void {
  
    this.img = "../../assets/Background/bgimage2.png";
  }

  Adduser(Adduser : NgForm)
  {
    console.log(Adduser.value);
    
    this.lgnsrvc.AddUser(Adduser.value);
    Adduser.reset();
    console.log("User Registered Successfully");

  }
  
  

}
