export interface BlogPostInterface {
  uuid: string;
  title: string;
  author: string;
  published: Date | string;
  heroImage?: string;
  body: string;
}
