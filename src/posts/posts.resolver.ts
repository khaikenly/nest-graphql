import { Resolver } from '@nestjs/graphql';
import { Post } from 'src/graphql.schema';

@Resolver((of) => Post)
export class PostsResolver {}
