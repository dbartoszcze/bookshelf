import {Component, inject, OnInit, signal} from '@angular/core';
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
export class AppComponent implements OnInit {

  private bookService = inject(BookService);

  books = signal<Book[]>([]);

  ngOnInit() {
    this.initBooks()
  }

  private initBooks():void{
    this.bookService.getBooks()
      .subscribe(
        books => {
          this.books.set(books ?? []);
        }
      )
  }
}
