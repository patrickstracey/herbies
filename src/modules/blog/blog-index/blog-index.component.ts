import { Component, OnInit } from '@angular/core';
import { BlogPostInterface } from '../blog-post.interface';
import { BLOG_POSTS } from '../blog.mock-data';

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss'],
})
export class BlogIndexComponent implements OnInit {
  posts: BlogPostInterface[] = BLOG_POSTS;

  constructor() {}

  ngOnInit(): void {}
}
