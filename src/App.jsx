import Footer from "./components/Footer";
import Header from "./components/Header";

function App(props) {
  return (
    <main class="container mx-auto px-4 pt-4 pb-5 relative min-h-screen">
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold underline">Bookstore App</h1>
        <Header />
      </div>
      {props.children}
      <Footer />
    </main>
  );
}

export default App;
