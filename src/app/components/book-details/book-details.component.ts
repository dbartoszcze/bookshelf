import { Component, computed, inject, input } from '@angular/core';
import { BookService } from '../../services/book.service';
import { BookCardComponent } from '../book-card/book-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [BookCardComponent, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent {
  private bookService: BookService = inject(BookService);

  readonly id = input.required<string>();
  book = computed(() => this.bookService.getBookById(this.id()));
}
