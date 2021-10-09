import { Component, Input, OnInit } from '@angular/core';
import { AddUsersComponent } from '../add-users/add-users.component';
import { Users } from '../Users';

@Component({
  selector: 'app-edit-user-details',
  templateUrl: '../add-users/add-users.component.html',
  styleUrls: ['./edit-user-details.component.css']
})
export class EditUserDetailsComponent extends AddUsersComponent implements OnInit {
  isOn = false;
  @Input()
   user:Users
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  constructor() {
    super()
   }

  ngOnInit(): void {
    super.ngOnInit()
    //super.user=thiovs.user;
  }
  

}
