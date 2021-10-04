import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostInterface } from '../blog-post.interface';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  post: BlogPostInterface | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogPostService
  ) {}

  ngOnInit(): void {
    this.getBlogPost(this.route.snapshot.params['uuid']);
  }

  getBlogPost(uuid: string) {
    const result = this.blogService.getBlogPost(uuid);
    if (result) {
      this.post = result;
      return;
    }
    this.router.navigate(['']);
  }
}
