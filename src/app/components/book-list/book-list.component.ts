import { Component, inject, signal, Signal } from '@angular/core';
import { Book } from '../../models/book.model';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-book-list',
  imports: [BookCardComponent, BookFormComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  private readonly bookService = inject(BookService);
  private readonly router: Router = inject(Router);
  readonly books: Signal<Book[]> = this.bookService.books;

  readonly isBookFormOpen = signal<boolean>(false);

  protected onViewDetailsButtonClick(book: Book): void {
    const { id } = book;
    this.router.navigate(['/books', id]);
  }

  protected onOpenBookFormModal(): void {
    this.isBookFormOpen.set(true);
  }

  protected onCloseModal(): void {
    this.isBookFormOpen.set(false);
  }

  protected onSaveBook($bookOutputData: Book): void {
    this.bookService.addBook($bookOutputData);

    this.isBookFormOpen.set(false);
  }
}
