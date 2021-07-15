import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {  

  constructor() { }
  AddUser(user: any)
  {
    let users = [];
    if(localStorage.getItem('Users'))
    {
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [...users, user];
    }
    else
    {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));


  }
  
}
