import { Injectable } from '@angular/core';
import { BlogPostInterface } from './blog-post.interface';
import { BLOG_POSTS } from './blog.mock-data';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor() {}

  getBlogPost(uuid: string): BlogPostInterface | undefined {
    const result = BLOG_POSTS.find((post) => post.uuid == uuid);
    if (result) {
      return result;
    }
    return;
  }

  patchBlogPost(post: BlogPostInterface) {
    const original = this.getBlogPost(post.uuid) as BlogPostInterface;
    const index = BLOG_POSTS.indexOf(original);
    BLOG_POSTS[index] = post;
  }

  createBlogPost(newPost: BlogPostInterface) {
    newPost.uuid = (Math.random() + 1).toString(36).substring(2);
    BLOG_POSTS.unshift(newPost);
  }

  deleteBlogPost(post: BlogPostInterface) {
    const original = this.getBlogPost(post.uuid) as BlogPostInterface;
    const index = BLOG_POSTS.indexOf(original);
    BLOG_POSTS.splice(index, 1);
  }
}
