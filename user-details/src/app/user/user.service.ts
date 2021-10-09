import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
     private _http: HttpClient
    ) {

     }
     getlistofusers(): Observable<Users[]> {
      return this._http.get<Users[]>("api/Users/");  }
  
  deleteUserFromList(codeOfRequestPage: number): Observable<boolean> {
      return this._http.delete<boolean>("api/users/" + codeOfRequestPage);
    }

    postUserToList(nameSite: string, urlSite: string, requestContent: string): Observable<boolean> {
      debugger;
      return this._http.get<boolean>("api/RequestsPages/postRequestToOpenWebsite?nameSite=" + nameSite + "&urlSite=" + urlSite + "&requestContent=" + requestContent);
  }

  putUserToList(updatedRequest: Users): Observable<boolean> {
    debugger;
    return this._http.put<boolean>("api/RequestsPages/putRequest", updatedRequest);
}
}
