import './main-screen.scss';
import Cross from '../cross/cross';
import Circle from '../circle/circle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useHttp from '../../hooks/useHttp';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import useAction from '../../hooks/useAction';

const abcCoder = {
    0: 'Q',
    1: 'w',
    2: 'e',
    3: 'a',
    4: 'g',
    5: 'v',
    6: 'i',
    7: 'l',
    8: 'z',
    9: 'h',
};

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

const encoder = (codePath) => {
    let codedNumber = '';
    codePath.split('').forEach(item => {
        let temp = '';
        const char = abcCoder[item];

        if (+item % 2 === 0) {
            temp = char;
            temp += char.charCodeAt(0) + abcCoder[9-(+item)]
        } else {
            temp = abcCoder[9-(+item)];
            temp += char.charCodeAt(0) + char
        }
        
        codedNumber += temp;
    });
    return codedNumber;
}

const ViewMain = () => {
    const [ isModal, setIsModal ] = useState(false)
    const code = createCode(v4())
    const pathCode = encoder(code);
    const { setDataInDB } = useHttp();
    const startGameData = {
        data: Array(9).fill(Array(9).fill(0)),
        isNextX: true,
        prevStep: 10,
        nextField: [0,1,2,3,4,5,6,7,8],
        winPosition: Array(9).fill(0),
        winner: 0,
        playersNum: 1
    }

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

const ModalEnter = ({onModal}) => {
    const [ value, setValue ] = useState('');
    const {checkDataFromDB} = useHttp();
    const [isAllow, setisAllow] = useState('null');
    const navigate = useNavigate();


    const onValue = (v) => {
        if (v.length <= 6) {
            setValue(v) 
        }
    }

    useEffect(() => {
        if (isAllow) {
            navigate(`${encoder(value)}`)
        } else {
            setValue('')
        }
        
    }, [isAllow])

    const onCheck = async () => {
        checkDataFromDB(`Server/games/${value}`)
            .then(res => setisAllow(res))
    }

    return (
        <>
            <div className='modal'>
                <div className='modal__close' onClick={() => onModal(false)}></div>
                <div className='modal__title'>Enter code</div>
                <input type='number' className='modal__input' value={value} onChange={(e) => onValue(e.target.value)}/>
                <button className='modal__enter' onClick={onCheck}>
                    Join
                </button>
                {!isAllow == true ? <div className='black'>code is not correct, try again</div> : null}
            </div>
            <div className='underlayer' onClick={() => onModal(false)}></div>
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






