import useAction from "./useAction";
import { useSelector } from "react-redux";
import { combinations } from "../utils/consts";

const useWhoWinner = () => {
    const { setWinner, setWinnerOfField } = useAction();
    const winPosition = useSelector(state => state.winPosition)

    const whoWinnerInContainer = (winPosition) => {
        combinations.forEach(combitation => {
            let [a, b, c] = combitation;
            if (winPosition[a] && winPosition[a] === winPosition[b] && winPosition[b] === winPosition[c]) {
                setWinner(winPosition[a]);
                return winPosition[a];
            } 
        })
        return null;
    }
    
    const whoWinnerInField = (data, i) => {
        if (winPosition[i]) return false;
        let result = null;
        combinations.forEach(combitation => {
            let [a, b, c] = combitation;
            if (data[a] && data[a] === data[b] && data[b] === data[c]) {
                setWinnerOfField([i, data[a]]);
                result = data[a];
            } 
        })
        return result;
    }


    return {whoWinnerInContainer, whoWinnerInField};
}

export default useWhoWinner;