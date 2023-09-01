import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/navbar";

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
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
