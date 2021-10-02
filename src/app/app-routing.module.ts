import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogFormComponent } from 'src/modules/blog/blog-form/blog-form.component';
import { BlogIndexComponent } from 'src/modules/blog/blog-index/blog-index.component';
import { BlogPostComponent } from 'src/modules/blog/blog-post/blog-post.component';

const routes: Routes = [
  { path: 'post/:id/edit', component: BlogFormComponent },
  { path: 'post/create', component: BlogFormComponent },
  { path: 'post/:id', component: BlogPostComponent },
  { path: '', component: BlogIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
