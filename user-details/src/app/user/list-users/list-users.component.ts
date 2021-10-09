import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../Users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  dataSource = undefined;
  UsersList: Users[] = [];
  myusersList: Users[]=[];
  requestToUpdate:Users;
  emptyList: boolean = false;
  _nameEnterUser: string;
  _phoneUser:string;
  _emailUser:string;

  // currentRequestPageForTable: PageRequestsTableFields;
  user: Users;
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
     this.displayListUsers();
  }
  displayListUsers(): void {
    debugger;
    if (this.user == undefined) {
      // this._loginService.openSnackBar("")
      /////////////////////////////////////////////////////////
    }
    else {
      debugger;
      this._userService.getlistofusers().subscribe((myusersList) => {
        debugger;

        this.myusersList = myusersList; 
      })
      this.myusersList.forEach((user) => {
this._nameEnterUser= user.nameEnterUser;
this._emailUser= user.emailUser;
this._phoneUser= user.phoneUser;

      })
     
 
      }
    }

    removeUser(element: any): void {
      debugger;
      this.myusersList.forEach((user) => {
        if (user.id == element.id) {
          this._userService.deleteUserFromList(this.user.id).subscribe((isRemoveRequests) => {
            if (isRemoveRequests == true) {
              return true
            }
            
          } )
        }
      })
    }


    updateUserToList(element: any): void {
      debugger;
      this.myusersList.forEach((currentRequest) => {
        if (currentRequest.id == element.id) {
          this.requestToUpdate = currentRequest;
        }
      });
      debugger;
      localStorage.setItem("requestToUpdate", JSON.stringify(this.requestToUpdate));
      this.router.navigate(['/EditUserDetails']);
    }


  }
