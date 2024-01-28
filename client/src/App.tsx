import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./page/NotFound";
import { AccountRouter, AccountRouterChildrens } from "./router/AccountRouter";
import { BasicRouter, BasicRouterChildrens } from "./router/BasicRouter";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BasicRouter />,
      children: BasicRouterChildrens,
    },
    {
      path: "account",
      element: <AccountRouter />,
      children: AccountRouterChildrens,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
