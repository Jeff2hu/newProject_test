import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <BasicRouter />,
  //     children: BasicRouterChildrens,
  //   },
  //   {
  //     path: "account",
  //     element: <AccountRouter />,
  //     children: AccountRouterChildrens,
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter basename="/newProject_test">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Link to="/game">Godot Game</Link>
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/game"
            element={
              <>
                <iframe
                  src="/godot-export/godot.html"
                  title="Godot Game Test HTML"
                  width="100vw"
                  height="100vh"
                />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
