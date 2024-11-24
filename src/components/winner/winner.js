import { useParams } from 'react-router-dom';
import useAction from '../../hooks/useAction';
import './winner.scss'
import useHttp from '../../hooks/useHttp';
import { startGameData } from '../../utils/consts';
import useCoder from '../../hooks/useCoder';

const Winner = ({winner}) => {
    const {clearContainer} = useAction();
    const {setDataInDB} = useHttp();
    const {numGame} = useParams();
    const {decoder} = useCoder()

    const restart = () => {
        clearContainer()
        setDataInDB(`Server/games/${decoder(numGame)}`, startGameData)
    }

    return (
        <>

            <div className="underlayer"></div>
            <div className='modal-win'>
                <h1 className="info-winner">WIN {winner === 1? 'X' : 'O'}</h1>
                <button className='clear-container'  onClick={restart}>Restart</button>
            </div>

        </>
    )
}

export default Winner;