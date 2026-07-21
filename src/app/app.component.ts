import { Component } from '@angular/core';
import {Book} from './models/book.model';
import {BookListComponent} from './components/book-list/book-list.component';

@Component({
  selector: 'app-root',
  imports: [
    BookListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  books: Book[] = [
    {
      title: 'It',
      author: 'Stephen King',
      description:
        'Seven children are terrorized by an ancient evil entity that takes the form of Pennywise the Dancing Clown. Years later, they reunite to confront their greatest fears.',
      isRead: false
    },
    {
      title: 'The Shining',
      author: 'Stephen King',
      description:
        'Jack Torrance becomes the winter caretaker of the isolated Overlook Hotel, where supernatural forces slowly consume his sanity.',
      isRead: true
    },
    {
      title: '1984',
      author: 'George Orwell',
      description:
        'A dystopian novel about a society ruled by surveillance, censorship, and the manipulation of truth by Big Brother.',
      isRead: true
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description:
        'Bilbo Baggins embarks on an unexpected adventure with a company of dwarves to reclaim their homeland from the dragon Smaug.',
      isRead: false
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      description:
        'Paul Atreides must survive on the desert planet Arrakis while becoming a central figure in a struggle over the galaxy’s most valuable resource.',
      isRead: true
    },
    {
      title: 'The Witcher: The Last Wish',
      author: 'Andrzej Sapkowski',
      description:
        'A collection of stories introducing Geralt of Rivia, a monster hunter navigating a morally complex fantasy world.',
      isRead: false
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt & David Thomas',
      description:
        'A timeless guide for software developers covering best practices, problem-solving techniques, and professional craftsmanship.',
      isRead: true
    }
  ]
}
