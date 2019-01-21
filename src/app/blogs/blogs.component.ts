import { Component, OnInit } from '@angular/core';
import { IBlog } from './blog';
import { BlogService } from './blog.service';
import { ErrorHandlingService } from '../shared/error-handling.service';

@Component({
    templateUrl: './blogs.component.html'
})
export class BlogsComponent implements OnInit {

    componentTitle = 'RESTful Blog App';
    blogs: IBlog[] = [];
    errorMessage: string;

    constructor(private blogService: BlogService,
                private errorHandlingService: ErrorHandlingService) {}

    ngOnInit(): void {
        this.blogService.getBlogs().subscribe(
            blogs => {
                this.blogs = blogs;
            },
            error => this.errorMessage = <any>error
        );
    }

    srcErrorHandler(event) {
        this.errorHandlingService.srcErrorHandler(event);
    }
}
