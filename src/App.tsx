import "./App.css";
import { FruitContainer } from "./components/features/fruit-panel/FruitContainer";
import { JarContainer } from "./components/features/jar-panel/JarContainer";

function App() {
  return (
    <div className="h-screen w-screen">
      <h1>Finofo Demo</h1>
      <div className="w-full flex justify-between">
         <FruitContainer />
          <JarContainer />
      </div>
    </div>
  );
}

export default App;
