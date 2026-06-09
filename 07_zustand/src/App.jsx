import "./App.css";
import Counter from "./components/Counter";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";

function App() {
  return (
    <>
      <NavBar className="mb-8" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Zustand Counter</h1>
        <Counter />
        <Posts />
      </main>
    </>
  );
}

export default App;
