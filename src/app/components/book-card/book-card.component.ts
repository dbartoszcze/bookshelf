import { Component, computed, input, output } from '@angular/core';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
})
export class BookCardComponent {
  book = input.required<Book>();
  withRedirectToDetailsButton = input<boolean>(false);
  viewDetailsButtonClicked = output<Book>();

  accentClass = computed(() => {
    return `book-card-image-background-accent${(this.book().id - 1) % 4}`;
  });

  onViewDetailsButtonClick(book: Book): void {
    this.viewDetailsButtonClicked.emit(book);
  }
}
