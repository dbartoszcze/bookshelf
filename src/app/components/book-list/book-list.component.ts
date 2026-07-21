import {Component, input} from '@angular/core';
import {Book} from '../../models/book.model';
import {BookCardComponent} from '../book-card/book-card.component';

@Component({
  selector: 'app-book-list',
  imports: [
    BookCardComponent
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books = input.required<Book[]>();
}
