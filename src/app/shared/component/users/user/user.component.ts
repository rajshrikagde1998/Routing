import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/usres';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId ! : number;
  userObj ! : Iusers
  constructor(
    private _route : Router,
    private _router : ActivatedRoute,
    private _userService : UsersService) { }

  ngOnInit(): void {
    // console.log(this._router.snapshot);
    // this.userId = +this._router.snapshot.params["userId"]
    this._router.params
       .subscribe((res)=>{
        // console.log(res);
        this.userId = +res['userId']
        this.userObj =this._userService.getUser(this.userId)!
       })
   
    
  }
  goToEditUser(){
   this._route.navigate(['/users',this.userId,'edit'],
   {queryParamsHandling :"preserve"})
  }

}
