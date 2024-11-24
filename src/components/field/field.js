import React, {useRef,useEffect} from "react";
import Square from "../square/square";
import './field.scss';
import {v4 as uuidv4} from 'uuid';
import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import useWhoWinner from "../../hooks/useWhoWinner";
import Cross from '../cross/cross';
import Circle from '../circle/circle';
import sound from '../../assets/audio/minecraft-totem-sound.mp3'



const Field = ({onClick, dataProps, classProps }) => {
    const state = useSelector(state => state);
    const data = useSelector(state => state.data[dataProps]);
    const nextField = useSelector(state => state.nextField);
    const winPosition = useSelector(state => state.winPosition);
    const isNextX = useSelector(state => state.isNextX);      
    const {addData, setPrevStep, setNextFieldAny, setDataTest, setCliked} = useAction();  
    const {whoWinnerInField} = useWhoWinner();
    const darkMode = useSelector(state => state.darkMode);

    useEffect(() => {
        whoWinnerInField(data, dataProps);
    }, [data, dataProps, whoWinnerInField]);

    const onChangeSign = (i) => { 
        if (data[i] || !nextField.includes(dataProps)) { 
            return;
        } else if ((whoWinnerInField(state.data[i], i) && nextField.includes(dataProps)) || fix(i) || !!winPosition[i]) {
            setDataTest([dataProps, i]);
            setNextFieldAny(replaceArray(winPosition, i));
            setPrevStep(10);
            setCliked(true);
            return;
        } else {
            addData([dataProps, i]);
            setPrevStep(i); 
            setCliked(true)
        }
    } 

    const replaceArray = (array, i) => {
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

    const fix = (i) => { // перевірка чи при завершенні поля хід не впаде на те саме поле щоб в цьому випадку дати вільний хід
        const newArray = [...state.data[i]]

        if (!newArray[i]) {
            newArray[i] = isNextX ? 1 : 2;
        }
        
        return whoWinnerInField(newArray, i); 
    }
    
    const audioRef = useRef(null);
    
    const playSound = () => {
        audioRef.current.play();
    };
    return (
        <>
            <audio ref={audioRef}>
                <source src={sound} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className={`${classProps} ${darkMode ? 'dark': ''}`} onClick={onClick}>       
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
                            <span key={uniqeuId}  onClick={() => onChangeSign(i)} >
                                <Square content={value} key={i} />
                            </span>
                        )
                    })} 
                </div>
            </div>  
        </>

    ) 
}

export default Field;