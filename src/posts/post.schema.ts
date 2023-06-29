import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/authors/author.schema';

@ObjectType()
export class Post {
  @Field(() => ID)
  id: number;

  @Field({
    description: `Book title`,
  })
  title: string;

  @Field(() => Int, { nullable: true })
  votes?: number;

  @Field(() => Author)
  author: Author;
}
