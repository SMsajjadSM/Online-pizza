import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { currentQuentityById, deleteItem } from "./cartSlice";
import UpdateItemQuentity from "./UpdateItemQuentity";
function CartItem({ item }) {
  const { pizzaId, name, quentity, totalPrice } = item;
  const dispatch = useDispatch();
  const currentQuentity = useSelector(currentQuentityById(pizzaId));
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quentity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuentity
          currentQuentity={currentQuentity}
          pizzaId={pizzaId}
        />
        <Button onClick={() => dispatch(deleteItem(pizzaId))} type="small">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
