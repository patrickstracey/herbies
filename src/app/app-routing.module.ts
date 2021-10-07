import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogFormComponent } from 'src/modules/blog/blog-form/blog-form.component';
import { BlogIndexComponent } from 'src/modules/blog/blog-index/blog-index.component';
import { BlogPostComponent } from 'src/modules/blog/blog-post/blog-post.component';
import { HomeComponent } from 'src/modules/landing/home/home.component';

const routes: Routes = [
  { path: 'post/:uuid/edit', component: BlogFormComponent },
  { path: 'post/create', component: BlogFormComponent },
  { path: 'post/:uuid', component: BlogPostComponent },
  { path: 'blog', component: BlogIndexComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
