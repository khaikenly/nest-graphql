import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Post } from 'src/posts/post.schema';

@ObjectType({ description: 'Author model' })
export class Author {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(() => [Post])
  posts: Post[];
}
