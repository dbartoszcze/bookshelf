import {Component, inject, Signal} from '@angular/core';
import {Book} from './models/book.model';
import {BookListComponent} from './components/book-list/book-list.component';
import {BookService} from './services/book.service';

@Component({
  selector: 'app-root',
  imports: [
    BookListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private bookService = inject(BookService);

  books:Signal<Book[]> = this.bookService.books;

}
