import {Component, Input} from '@angular/core';
import {Book, DEFAULT_BOOK} from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  @Input({required: true}) book: Book = DEFAULT_BOOK;

}
