import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
