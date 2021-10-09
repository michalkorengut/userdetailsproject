import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { Route, RouterModule } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';

const ADMIN_ROUTES: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "edit-user-details" },
  { path: "edit-user-details", component:EditUserDetailsComponent  }
      
  
];

@NgModule({
  declarations: [
    EditUserDetailsComponent,
    ListUsersComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(ADMIN_ROUTES)
  ]
})
export class UserModule { }
