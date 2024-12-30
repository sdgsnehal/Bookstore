import { createSignal, For } from "solid-js";
import Book from "./Book";
import data from "../../database/data.json";
function BookList() {
  const [books] = createSignal(data.books);
  return (
    <section>
      <For each={books()}>
        {(book) => (
          <Book
            id={book.id}
            title={book.title}
            img={book.image}
            excerpt={book.excerpt}
            author={book.author}
          />
        )}
      </For>
    </section>
  );
}
export default BookList;
