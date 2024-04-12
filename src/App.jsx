//components
import Home from "./components/Home";
// import TypeProvider from "./context/TypeProvider";
import TypeProvider from "./context/TypeProvider";

function App() {
  return (
    <TypeProvider>
      <Home />
    </TypeProvider>
  );
}

export default App;
