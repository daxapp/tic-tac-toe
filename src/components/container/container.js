import { useEffect, useRef } from "react";
import useWhoWinner from "../../hooks/useWhoWinner";
import Field from "../field/field";
import './container.scss';
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import useAction from "../../hooks/useAction";
import useHttp from "../../hooks/useHttp";
import Nav from "../nav/nav";
import Circle from "../circle/circle";
import Cross from "../cross/cross";
import { useParams } from "react-router-dom";
import Winner from "../winner/winner";


const abcDecoder = {
    'Q': 0,
    'w': 1,
    'e': 2,
    'a': 3,
    'g': 4,
    'v': 5,
    'i': 6,
    'l': 7,
    'z': 8,
    'h': 9,
};

const decoder = (codedNumber) => {
    return codedNumber.match(/\d{2,3}/g).map(item => {
        return abcDecoder[String.fromCharCode(item)]
    }).join('')
}

const Container = () => {
    const state = useSelector(state => state);
    const { whoWinnerInContainer } = useWhoWinner();
    const { setCliked, setWinner } = useAction();
    const { subscribeToDataFromDB, setDataInDB } = useHttp();
    const arrayRef = useRef([]);
    const { numGame } = useParams();

    const { data, isNextX, prevStep, darkMode, winner, winPosition, playersNum } = state;

    const createCode = (code) => {
        let result = '';
        code.split('').forEach(item => {
            if (!isNaN(item)) {
                result += item;
            }   
        })
        result = result.slice(result.length-6) * 581 + ''
        return result.slice(result.length-6);
    }

    useEffect(() => {
        subscribeToDataFromDB(`Server/games/${decoder(numGame)}`)
    }, []);

    useEffect(() => {
        console.log(winner)
        if (state.clicked) {
            setDataInDB(`Server/games/${decoder(numGame)}`, state)
        }
    }, [state])

    useEffect(() => {   
        whoWinnerInContainer(winPosition);
        setCliked(false)

    }, [data, whoWinnerInContainer, state]);

    useEffect(() => {
        return () => {
            setWinner(0);
        }
    }, [winner]);

    return (
        <>  
            {!!winner ? <Winner winner={winner}></Winner> : null}
            <Nav/>
            <div className="center">
                <div className="item">
                    <div className={darkMode ? 'who-next who-next-dark' : 'who-next'}>NEXT STEP</div>
                    <div className={darkMode ? "code-room code-room_dark":"code-room"}>CODE ROOM: {decoder(numGame)}</div>
                    <div className="who-next-icons">
                        <Cross notNeon={!isNextX}/>
                        <Circle notNeon={isNextX}/>
                    </div>
                </div>
                <div className={`container item ${darkMode ? 'dark1': ''}`}>
                    <div className="big-line big-line-vertical big-line-first"></div>
                    <div className="big-line big-line-vertical big-line-second"></div>
                    <div className="big-line big-line-horizontal big-line-third"></div>
                    <div className="big-line big-line-horizontal big-line-fourth"></div>
                    {data && data.map((item, i) => {
                        const uniqeuId = uuidv4();
                        return (
                            <div key={uniqeuId} >
                                <Field 
                                    ref={(el) => {
                                        arrayRef.current[i] = el;
                                    }} 
                                    dataProps={i}
                                    classProps={state.nextField.includes(i) ? 'field field-active' : 'field'}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    ) 
}

export default Container;



