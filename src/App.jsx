import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as loaderMenu } from "./features/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as loaderOrder } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Error from "./ui/Error";
import "./index.css"
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/menu",
          element: <Menu />,
          errorntEleme: <Error />,
          loader: loaderMenu,
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action: createOrderAction,
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: loaderOrder,
          errorntEleme: <Error />,
        },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
