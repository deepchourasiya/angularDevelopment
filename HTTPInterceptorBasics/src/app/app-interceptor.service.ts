import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppInterceptorService implements HttpInterceptor {
  constructor() {}

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const header = new HttpHeaders({
      Authorization: 'AkashDeep',
    });

    const clone = req.clone({
      headers: header,
    });

    return next.handle(clone).pipe(catchError(this.handleError));
  }
}
