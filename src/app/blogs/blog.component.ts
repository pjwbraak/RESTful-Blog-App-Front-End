import { Component, OnInit } from '@angular/core';
import { IBlog } from './blog';
import { IComment } from './comment';
import { BlogService } from './blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

    componentTitle = 'RESTful Blog App';
    errorMessage = '';
    blog: IBlog | undefined;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogService: BlogService) {}

    ngOnInit(): void {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
          const id = '' + param; // convert number to string type
          this.getBlog(id);
        }
    }

    getBlog(id: string) {
        this.blogService.getBlog(id).subscribe(
            blog => this.blog = blog,
            error => this.errorMessage = <any>error);
    }

    // needs function to get comments that belong to blog
}
