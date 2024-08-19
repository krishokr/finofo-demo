import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Container } from "./components/features/container/Container";

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
        <Container />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
