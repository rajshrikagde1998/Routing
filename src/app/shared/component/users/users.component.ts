import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { Iusers } from '../../model/usres';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArray ! :  Iusers[]
  constructor(private _userService : UsersService) { }

  ngOnInit(): void {
    this.userArray = this._userService.getAllUsers()
  }

}
