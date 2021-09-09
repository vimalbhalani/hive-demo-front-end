import React, { Suspense } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
const Comments = React.lazy(() => import("./containers/Comments"));
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
