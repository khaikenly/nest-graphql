import { Injectable } from '@nestjs/common';
import { Post } from './post.schema';

@Injectable()
export class PostsService {
  private Posts: Post[] = [];

  getAllPosts(): Post[] {
    return this.Posts;
  }

  getPostById(id: number): Post {
    return this.Posts.find((post) => post.id === id);
  }

  getAllPostsByAuthor(authorId: number): Post[] {
    return this.Posts.filter((post) => post.author.id === authorId);
  }
}
