import { BookModel } from './book.model';

describe('Book', () => {
  it('should create an instance', () => {
    expect({
      title: "Test",
      image: "url",
      description: "Description",
      price: "0.0"
    } as BookModel).toBeTruthy();
  });
});
