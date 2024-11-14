import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { addData, setWinnerOfField, setWinner, setPrevStep, setNextFieldAny, clearContainer, setTimeStep, setDataFromDB, setDataTest, setCliked, setDarkMode, set  } from '../slice/slice';

const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators({
                                addData, 
                                setWinner, 
                                setWinnerOfField,
                                setPrevStep, 
                                setNextFieldAny, 
                                clearContainer,
                                setTimeStep, 
                                setDataFromDB,
                                setDataTest,
                                setCliked,
                                setDarkMode,
                                set
                                }, dispatch);
}

export default useAction;