import React, {useRef,useEffect} from "react";
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
import useCoder from "../../hooks/useCoder";
import sound from '../../assets/audio/strange-notification-36458.mp3'



const Container = () => {
    const state = useSelector(state => state);
    const { data, isNextX, darkMode, winner, winPosition, } = state;
    
    const { decoder } = useCoder()
    const { whoWinnerInContainer } = useWhoWinner();
    const { setCliked, setWinner } = useAction();
    const { subscribeToDataFromDB, setDataInDB } = useHttp();
    const { numGame } = useParams();
    
    const audioRef = useRef(null);  

    useEffect(() => {
        subscribeToDataFromDB(`Server/games/${decoder(numGame)}`)
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (state.clicked) {
            setDataInDB(`Server/games/${decoder(numGame)}`, state)
            
        }
        // eslint-disable-next-line
    }, [state, setDataInDB, numGame])

    useEffect(() => {   
        playSound()
        whoWinnerInContainer(winPosition);
        setCliked(false)

    }, [data, whoWinnerInContainer, state, setCliked, winPosition]);

    useEffect(() => {
        return () => {
            setWinner(0);
        }
    }, [winner, setWinner]);

    const copyTextToClipboard = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
        } catch (err) {}
    };
    
    
    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                console.error("Error playing audio:", error);
            });
        }
    };

    return (
        <>  
            <audio ref={audioRef}>
                <source src={sound} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            {!!winner ? <Winner winner={winner}></Winner> : null}
            <Nav/>
            <div className="center">
                <div className="item">
                    <div 
                        className={darkMode ? 'who-next who-next-dark' : 'who-next'}>
                        NEXT STEP
                    </div>
                    <div 
                        title='copy code' 
                        className={darkMode ? "code-room code-room_dark" : "code-room"} 
                        onClick={() => copyTextToClipboard(decoder(numGame))}>
                        <span className="no">CODE ROOM:</span> 
                        <span > {decoder(numGame)}</span>
                    </div>
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



