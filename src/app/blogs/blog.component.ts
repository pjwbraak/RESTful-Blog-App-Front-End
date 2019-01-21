import { Component, OnInit } from '@angular/core';
import { IBlog } from './blog';
import { IComment } from './comment';
import { BlogService } from './blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private blogService: BlogService) {}

    componentTitle = 'RESTful Blog App';
    errorMessage = '';
    blog: IBlog | undefined;
    comments: IComment[];
    noImage: string = 'https://cdn.shopify.com/s/files/1/1380/9193/t/3/assets/no-image.svg?2375582141201571545';

    ngOnInit(): void {
        const param = this.route.snapshot.paramMap.get('id');
        if (param) {
          const id = '' + param; // convert number to string type
          this.getBlog(id);
          this.getComments(id);
        }
    }

    getBlog(id: string) {
        this.blogService.getBlog(id).subscribe(
            blog => this.blog = blog,
            error => this.errorMessage = <any>error
        );
    }

    getComments(id: string) {
        this.blogService.getBlogComments(id).subscribe(
            comments => this.comments = comments,
            error => this.errorMessage = <any>error
        );
    }

    srcErrorHandler(event) {
        event.target.src = this.noImage;
    }
}
