import { A } from "@solidjs/router";
function Header() {
  return (
    <header class="flex gap-2 bg-white text-black p-4">
      <nav class="hover:bg-sky-700">
        <A href="/">Home</A>
      </nav>
      <nav class="hover:bg-sky-700">
        {" "}
        <A href="/wish-list">WishList</A>
      </nav>
    </header>
  );
}

export default Header;
