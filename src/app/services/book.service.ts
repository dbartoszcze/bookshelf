import {Injectable, signal} from '@angular/core';
import {Book} from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _books = signal<Book[]>([
    {
      id: 1,
      title: 'It',
      author: 'Stephen King',
      description:
        'Seven children are terrorized by an ancient evil entity that takes the form of Pennywise the Dancing Clown. Years later, they reunite to confront their greatest fears.',
      isRead: false
    },
    {
      id: 2,
      title: 'The Shining',
      author: 'Stephen King',
      description:
        'Jack Torrance becomes the winter caretaker of the isolated Overlook Hotel, where supernatural forces slowly consume his sanity.',
      isRead: true
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      description:
        'A dystopian novel about a society ruled by surveillance, censorship, and the manipulation of truth by Big Brother.',
      isRead: true
    },
    {
      id: 4,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description:
        'Bilbo Baggins embarks on an unexpected adventure with a company of dwarves to reclaim their homeland from the dragon Smaug.',
      isRead: false
    },
    {
      id: 5,
      title: 'Dune',
      author: 'Frank Herbert',
      description:
        'Paul Atreides must survive on the desert planet Arrakis while becoming a central figure in a struggle over the galaxy’s most valuable resource.',
      isRead: true
    },
    {
      id: 6,
      title: 'The Witcher: The Last Wish',
      author: 'Andrzej Sapkowski',
      description:
        'A collection of stories introducing Geralt of Rivia, a monster hunter navigating a morally complex fantasy world.',
      isRead: false
    },
    {
      id: 7,
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      description:
        'A timeless guide for software developers covering best practices, problem-solving techniques, and professional craftsmanship.',
      isRead: true
    }
  ]);

  constructor() { }

  getBooks(): Book[] {
    return this._books();
  }
}
