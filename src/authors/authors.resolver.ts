import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Author } from './author.schema';
import { AuthorsService } from './authors.service';
import { PostsService } from 'src/posts/posts.service';
import { Post } from 'src/posts/post.schema';
@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => Author)
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.getAuthorById(id);
  }

  @ResolveField(() => [Post])
  async getPosts(@Parent() author: Author): Promise<Post[]> {
    const { id } = author;
    return this.postsService.getAllPostsByAuthor(id);
  }
}
