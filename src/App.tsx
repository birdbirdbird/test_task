import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import CustomForm from "./components/CustomForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <CustomForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
