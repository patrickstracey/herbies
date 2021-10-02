import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostInterface } from '../blog-post.interface';
import { BLOG_POSTS } from '../blog.mock-data';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss'],
})
export class BlogPostComponent implements OnInit {
  post: BlogPostInterface | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getBlogPost(this.route.snapshot.params['uuid']);
  }

  getBlogPost(uuid: string) {
    const result = BLOG_POSTS.find((post) => post.uuid == uuid);
    if (result) {
      this.post = result;
      return;
    }
    this.router.navigate(['']);
  }
}
