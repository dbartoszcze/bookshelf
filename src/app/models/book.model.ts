
export const DEFAULT_BOOK: Book = {
  name: "",
  author: "",
  description: "",
  isRead: false
}

export interface Book {
  name: string,
  author: string,
  description: string,
  isRead: boolean,
  logoImg?: string,
}
