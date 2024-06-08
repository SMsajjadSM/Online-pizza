import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./ui/Home";
import Menu,{loader} from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error"
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu />,      errorElement:<Error/>,
          loader: loader},
        { path: "/order/new", element: <CreateOrder /> },
        { path: "/order/order:Id", element: <Order /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
