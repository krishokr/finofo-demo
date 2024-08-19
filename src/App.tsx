import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { FruitContainer } from "./components/features/fruit-panel/FruitContainer";
import { JarContainer } from "./components/features/jar-panel/JarContainer";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({defaultOptions: {
    queries: {
      retry: 0,
    },
  },
  });
  
  return (
    <QueryClientProvider client={queryClient} >
      <div className="h-screen w-screen">
        <h1>Finofo Demo</h1>
        <div className="w-full flex justify-between">
          <FruitContainer />
          <JarContainer />
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
