import { Injectable } from '@angular/core';
import { IBlog } from './blog';
import { IComment } from './comment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

// we register this service with the root injection service module. Not a component one, because this one can be used for the entire app
@Injectable({
    providedIn: 'root'
})
export class BlogService {

    private blogsUrl = 'api/blogs/blogs.json';
    private blogUrl = 'api/blogs/blog.json';

    constructor(private http: HttpClient) {}

    getBlogs(): Observable<IBlog[]> {
        return this.http.get<IBlog[]>(this.blogsUrl).pipe(
            catchError(this.handleError)
        );
    }

    getBlog(id: string): Observable<IBlog | undefined> {
        return this.http.get<IBlog>(this.blogUrl).pipe(
            catchError(this.handleError)
        );
        // id = this.blogUrl + id;
        // return this.http.get<IBlog>(id).pipe(
        //     catchError(this.handleError)
        // );
    }

    // get comments from blog
    getBlogComments(id: string): Observable<IComment[] | undefined> {
        return this.getBlog(id).pipe(
            map((blog: IBlog) => blog.comments)
        );
    }

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
