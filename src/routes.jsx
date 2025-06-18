import App from "./App";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Items from "./components/Items/Items";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/items", element: <Items /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
];

export default routes;
