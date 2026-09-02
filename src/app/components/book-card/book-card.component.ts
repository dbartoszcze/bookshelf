import { Component, computed, input } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  book = input.required<Book>();
  accentIndex = input<number>(0);

  accentClass = computed(() => {
    return `book-card-image-background-accent${this.accentIndex() % 4}`;
  });
}
