import { Injectable } from '@nestjs/common';
import { Author } from './author.schema';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [
    { id: 1, posts: [], firstName: 'a', lastName: 'b' },
  ];

  getAllAuthors(): Author[] {
    return this.authors;
  }

  getAuthorById(id: number): Author {
    return this.authors.find((author) => author.id === id);
  }

  createAuthor(firstName: string, lastName: string): Author {
    const newAuthor: Author = {
      id: Math.random(),
      firstName,
      lastName,
      posts: [],
    };
    this.authors.push(newAuthor);
    return newAuthor;
  }

  updateAuthor(id: number, firstName: string, lastName: string): Author {
    const authorToUpdate = this.getAuthorById(id);
    if (authorToUpdate) {
      authorToUpdate.firstName = firstName;
      authorToUpdate.lastName = lastName;
    }
    return authorToUpdate;
  }

  deleteAuthor(id: number): boolean {
    const authorIndex = this.authors.findIndex((author) => author.id === id);
    if (authorIndex >= 0) {
      this.authors.splice(authorIndex, 1);
      return true;
    }
    return false;
  }
}
