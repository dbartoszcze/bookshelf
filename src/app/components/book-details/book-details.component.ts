import { Component, inject, input, OnInit, signal } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { BookCardComponent } from '../book-card/book-card.component';

@Component({
  selector: 'app-book-details',
  imports: [BookCardComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit {
  bookService: BookService = inject(BookService);

  readonly id = input.required<string>();
  book = signal<Book | undefined>(undefined);

  ngOnInit() {
    if (this.id()) {
      this.book.set(this.bookService.getBookById(this.id()));
    }
  }
}
