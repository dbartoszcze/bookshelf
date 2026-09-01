import {Component, input} from '@angular/core';
import {Book} from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss'
})
export class BookCardComponent {
  book = input.required<Book>();
  accentIndex = input.required<number>();




  protected get placeholderImageUrl(): string {
    return '../../../assets/icons/book.svg'
  }
}
