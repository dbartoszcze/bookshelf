
export const DEFAULT_BOOK: Book = {
  title: "",
  author: "",
  description: "",
  isRead: false
}

export interface Book {
  title: string,
  author: string,
  description: string,
  isRead: boolean,
  logoImg?: string,
}
