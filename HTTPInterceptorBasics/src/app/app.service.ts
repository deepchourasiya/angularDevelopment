import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any> {
    const headers = new HttpHeaders({
      AuthToken: 'AkashDeep',
    });

    const params = new HttpParams().append('age', '100');

    return this.http.get<any>(
      'https://jsonplaceholder.typicode.com/posts'

      // , {
      //   responseType: 'json',
      //   observe: 'response',
      //   headers: headers,
      //   params: params,
      // })
      // .pipe(retry(3), catchError(this.handleError)

      // .pipe(
      //   tap(response => console.log(response)),
      //   map(response => response.body)
    );
  }

  // handleError(error: HttpErrorResponse) {
  //   console.log(error);
  //   return throwError(error);
  // }
}
