import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/usres';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  userId! : number;
  userObj ! : Iusers;
  userRole!:string
  
  constructor( 
    private _route :Router,
    private _userService : UsersService,
    private _router : ActivatedRoute,
    ) { }

  ngOnInit(): void {
  this._router.params
       .subscribe((params : Params)=>{
       this.userId = +params['userId']
       this.userObj = this._userService.getUser(this.userId)!
       })
    
       
     this._router.queryParams
     .subscribe((qp1 :Params)=>{
     
     this.userRole = qp1['userRole']
     console.log( this.userRole);
     
      
     })
       
  }

  onUpdateProduct(username : HTMLInputElement){
   let obj :Iusers ={
    userName :username.value,
    id : this.userId,
    userRole : this.userObj.userRole
   }
   this._userService.updateUser(obj)
   this._route.navigate(['/users',this.userId])
  }
  
  



}
