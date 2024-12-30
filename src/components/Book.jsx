function Book({ id, title, img, excerpt, author }) {
  return (
    <section class="max-w-sm bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      <div class="h-48 overflow-hidden">
        <img class="w-full object-contain" src={img} alt={title} />
      </div>
      <div class="flex-grow px-6 py-4 flex flex-col">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base flex-grow">{excerpt}</p>
      </div>
      <div class="flex justify-between items-center px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          {author}
        </span>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View Details
        </button>
      </div>
    </section>
  );
}

export default Book;
