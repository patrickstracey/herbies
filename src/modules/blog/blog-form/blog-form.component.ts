import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostInterface } from '../blog-post.interface';
import { BlogPostService } from '../blog-post.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss'],
})
export class BlogFormComponent implements OnInit {
  blogPostForm!: FormGroup;
  blogPost: BlogPostInterface | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogPostService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.blogPostForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      imageUrl: [null],
      body: [null, Validators.required],
    });

    if (this.route.snapshot.params['uuid']) {
      this.setupBlogPostEdit(this.route.snapshot.params['uuid']);
    }
  }

  setupBlogPostEdit(uuid: string) {
    const result = this.blogService.getBlogPost(uuid);
    if (result) {
      this.blogPost = result;
      this.patchForm(result);
      return;
    }
  }

  patchForm(post: BlogPostInterface) {
    const form = this.blogPostForm.controls;
    form.title.setValue(post.title);
    form.author.setValue(post.author);
    form.body.setValue(post.body);
    form.imageUrl.setValue(post.heroImage ? post.heroImage : null);
  }

  submitForm(): BlogPostInterface | undefined {
    this.blogPostForm.markAllAsTouched();

    if (this.blogPostForm.valid) {
      const result = {
        title: this.blogPostForm.value.title,
        author: this.blogPostForm.value.author,
        heroImage: this.blogPostForm.value.imageUrl
          ? this.blogPostForm.value.imageUrl
          : null,
        body: this.blogPostForm.value.body,
        published: new Date(),
        uuid: this.blogPost ? this.blogPost.uuid : '',
      };
      console.log(result);
      this.blogPost
        ? this.blogService.patchBlogPost(result)
        : this.blogService.createBlogPost(result);
      this.router.navigate(['']);
    }

    return;
  }
}
