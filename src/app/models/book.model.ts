export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  isRead: boolean;
  logoImg?: string;
}

export type BookOutputData = Pick<Book, 'title' | 'description' | 'author'>;
