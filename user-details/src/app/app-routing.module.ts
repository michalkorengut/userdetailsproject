import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "Scheduling" },
  {path:"Scheduling",loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
