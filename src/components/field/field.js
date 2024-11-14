import React, {useEffect} from "react";
import Square from "../square/square";
import './field.scss';
import {v4 as uuidv4} from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import useAction from "../../hooks/useAction";
import useWhoWinner from "../../hooks/useWhoWinner";
import Cross from '../cross/cross';
import Circle from '../circle/circle';
import Winner from "../winner/winner";

export const replaceArray = (array, i) => {
    let result = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    result = result.map((item, index) => {
        if (!array[index] && i !== index) {
            return item
        }
        return null
    })
    
    if (result[0] === 0) {
        return [0, ...result.filter(item => item)];
    } else {
        return result.filter(item => item);
    }
}   

const Field = React.forwardRef(({onClick, dataProps, classProps }, ref) => {
    const state = useSelector(state => state)   
    const data = useSelector(state => state.data[dataProps]);
    const nextField = useSelector(state => state.nextField);
    const winPosition = useSelector(state => state.winPosition);
    const isNextX = useSelector(state => state.isNextX)
    const {addData, setPrevStep, setNextFieldAny, setDataTest, setCliked} = useAction();
    const {whoWinnerInField} = useWhoWinner();
    const darkMode = useSelector(state => state.darkMode)

    useEffect(() => {
        whoWinnerInField(data, dataProps);
    }, [data, dataProps, whoWinnerInField]);

    const onChangeSign = (i) => { 
        if ((whoWinnerInField(state.data[i], i) && nextField.includes(dataProps)) || fix(i) || !!winPosition[i]) { 
            setDataTest([dataProps, i]);
            setNextFieldAny(replaceArray(winPosition, i));
            setPrevStep(10);
            setCliked(true)
            return;
        } else if (data[i] || !nextField.includes(dataProps)) {
            return;
        } else {
            addData([dataProps, i]);
            setPrevStep(i); 
            setCliked(true)
        }
    }

    const fix = (i) => { //перевірка чи при завершенні поля хід не впаде на те саме поле щоб в цьому випадку дати вільний хід
        const newArray = [...state.data[i]];

        if (!newArray[i]) {
            newArray[i] = isNextX ? 1 : 2;
        }
        
        return whoWinnerInField(newArray, i); 
    }

    return (
        <>
            <div className={`${classProps} ${darkMode ? 'dark': ''}`} ref={ref} onClick={onClick}>       
                <div className= "line vertical first"></div>
                <div className= "line vertical second"></div>
                <div className= "line horizontal third"></div>
                <div className= "line horizontal fourth"></div>
                <div className="grid">
                    {data.map((item, i) => {
                        let value = null;
                        const uniqeuId = uuidv4();
                        
                        if (item === 1) {
                            value = <Cross/>;
                        } else if (item === 2) {
                            value = <Circle/>;
                        }

                        return (
                            <span key={uniqeuId}  onClick={() => {onChangeSign(i)}}>
                                <Square content={value} key={i} />
                            </span>
                        )
                    })} 
                </div>
            </div>  
        </>

    ) 
})

export default Field;