import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookCardComponent} from './components/book-card/book-card.component';
import {Book} from './models/book.model';

@Component({
  selector: 'app-root',
  imports: [
    BookCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  book: Book = {
    name: "It",
    author: "Stephen King",
    description: "It is a 1986 horror novel by American author Stephen King. This is his 22nd book and his 17th novel written under his own name. The story follows seven children as they are terrorized by an evil entity called It, which exploits the fears of its victims to disguise itself while hunting its prey. It is a monstrous, shapeshifting predator that primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.",
    isRead: false,
  }

}
