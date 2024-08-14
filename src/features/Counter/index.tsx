import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decrease, increase } from "./counterSlise";

function CounterFeature() {
    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    const handleIncreaseClick = () => {
        const action = increase();
        dispatch(action);
    };
    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    };
    return (
        <div>
            Counter : {counter} $
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decreace</button>
            </div>
        </div>
    );
}

export default CounterFeature;
