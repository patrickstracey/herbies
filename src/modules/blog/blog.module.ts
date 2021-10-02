import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogFormComponent } from './blog-form/blog-form.component';



@NgModule({
  declarations: [BlogIndexComponent, BlogPostComponent, BlogFormComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
