import { MinLength } from 'class-validator';
import { Field, ArgsType, ID } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorByNameArgsDTO {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ defaultValue: '' })
  @MinLength(3)
  lastName: string;
}

@ArgsType()
export class GetAuthorByIdArgsDTO {
  @Field(() => ID)
  @MinLength(1)
  id: number;
}
