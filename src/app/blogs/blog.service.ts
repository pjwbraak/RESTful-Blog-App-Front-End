import { Injectable } from '@angular/core';
import { IBlog } from './blog';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

// we register this service with the root injection service module. Not a component one, because this one can be used for the entire app
@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private productUrl = 'api/blogs/blogs.json';

    constructor(private http: HttpClient) {}

    getBlogs(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    // getProduct(id: number): Observable<IBlog | undefined> {
    //     return this.getProducts().pipe(
    //       map((products: IBlog[]) => products.find(p => p.productId === id))
    //     );
    //   }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // a client side or network error occured, handle it accordingly
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            // the backend returned an unsuccesful code
            errorMessage = `server returned code: ${err.status}, message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
