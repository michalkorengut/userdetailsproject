import { Component, OnInit } from '@angular/core';
import { Users } from '../Users';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  constructor() { }
  user:Users;
  ngOnInit(): void {
  }

}
