import { useState, useEffect } from "react";
import useHttp from "../../hooks/useHttp";
import { useNavigate } from "react-router-dom";
import useCoder from "../../hooks/useCoder";



const ModalEnter = ({onModal}) => {
    const { encoder } = useCoder();
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
        //eslint-disable-next-line
    }, [isAllow])

    const pressedEnter = (event) => {
        if (event.key === 'Enter') {
            onCheck()
        }
    }

    const onCheck = () => {
        checkDataFromDB(`Server/games/${value}`)
            .then(res => setisAllow(res))
    }

    return (
        <>
            <div className='modal' onKeyDown={pressedEnter}>
                <div className='modal__close' onClick={() => onModal(false)}></div>
                <div className='modal__title'>Enter code</div>
                <input type='number' className='modal__input' value={value} onChange={(e) => onValue(e.target.value)}/>
                <button className='modal__enter' onClick={onCheck}>
                    Join
                </button>
                {!isAllow === true ? <div className='black'>code is not correct, try again</div> : null}
            </div>
            <div className='underlayer' onClick={() => onModal(false)}></div>
        </>
    )
}

export default ModalEnter;