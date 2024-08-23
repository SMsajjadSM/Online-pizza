import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuentity, increaseItemQuentity } from "./cartSlice";

function UpdateItemQuentity({ pizzaId, currentQuentity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuentity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuentity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuentity(pizzaId))}
        type="round"
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuentity;
