import { createSignal, For } from "solid-js";
import Book from "./Book";
import data from "../../database/data.json";
function BookList() {
  const [books] = createSignal(data.books);
  return (
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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
