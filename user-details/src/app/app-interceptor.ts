import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';


@Injectable()
//הרעיון של ה- intecreptor שזה בעצם בקשה מהשרת הוא מקבל את כל מה שיש ב- httpclient זה עובר דרכו
export class AppInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
        //  תשובה מסנן אם הוא מסוג 
        filter(event => event instanceof HttpResponse&&event.url.includes("GetUsers")),
        //מחזיר את מה שקיבלנו מה- observable לאופרטור map
        map((event: HttpResponse<any>) => event.clone({ body: event.body.data.users.map(u=>{u.massge="from server";return u;}) }))
      );;
    

  }
}