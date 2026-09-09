import { Component, inject, Signal } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [BookCardComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  private bookService = inject(BookService);
  private router: Router = inject(Router);
  books: Signal<Book[]> = this.bookService.books;

  protected onViewDetailsButtonClick(book: Book): void {
    const { id } = book;
    this.router.navigate(['/books', id]);
  }
}
