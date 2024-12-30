import { A } from "@solidjs/router";

function Footer() {
  return (
    <footer class="flex justify-between items-center bg-white text-black p-4">
      <div class="flex gap-2">
        <nav class="hover:bg-sky-700">
          <A href="/">Home</A>
        </nav>
        <nav class="hover:bg-sky-700">
          {" "}
          <A href="/wish-list">WishList</A>
        </nav>
      </div>
      <h5>Copyright © 2024 All Rights Reserved</h5>
    </footer>
  );
}
export default Footer;
