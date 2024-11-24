import './main-screen.scss';
import Cross from '../cross/cross';
import Circle from '../circle/circle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import useHttp from '../../hooks/useHttp';
import { v4 } from 'uuid';
import useCoder from '../../hooks/useCoder';
import ModalEnter from '../modalEnter/modalEnter';
import { startGameData } from '../../utils/consts';

const ViewMain = () => {
    const [ isModal, setIsModal ] = useState(false);
    const { encoder, createCode } = useCoder()
    const code = createCode(v4())
    const pathCode = encoder(code);
    const { setDataInDB } = useHttp();


    const onModal = (arg) => {
        if (arg) {
            setIsModal(arg)
        } else {
            setIsModal(!isModal)
        }
    }

    return (
        <>
            {isModal ? <ModalEnter onModal={onModal}/> : null}
            <div className='main__title'>
                E
                <div className='main__title-inline'><Cross bigger/></div>
                treme 
                <br/> 
                Tic Tac T
                <div className='main__title-inline'><Circle bigger/></div>
                e
            </div>
            <div className='main__buttons'>
                <button className='main__start main__btn' onClick={() => setDataInDB(`Server/games/${code}`, startGameData)}>
                    <Link to={pathCode} className='main__link'>Create Game</Link>
                </button>
                <button className='main__settings main__btn' onClick={onModal}>
                    Enter Game
                </button>
                <button className='main__setings main__btn'>
                    <Link to="rules" className='main__setings main__link'>Rules</Link>
                </button> 
            </div>
        </>        
    )
}

const MainScreen = () => {
    return (
        <div className='main'>
            <ViewMain/>
        </div>
    )
}

export default MainScreen;






