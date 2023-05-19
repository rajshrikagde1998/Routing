import { Injectable } from '@angular/core';
import { Iusers } from '../model/usres';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  usersArr : Iusers[]=[
    {
      userName : 'jhon',
      id: 1,
      userRole :"admin"
    },
    {
      userName : 'july',
      id: 2,
      userRole :"admin"
    },
    {
      userName : 'may',
      id: 3,
      userRole :"user"
    },
  ]
  constructor() { }

  getAllUsers(): Iusers[]{
   return this.usersArr
  }

  getUser(id:number){
    // console.log(this.usersArr.find(user => user.id === id));
    
    return this.usersArr.find(user => user.id === id)
  }


  updateUser(user : Iusers){
   this.usersArr.forEach(u =>{
    if(u.id === user.id){
      u.userName = user.userName
    }
   })
  }
}
