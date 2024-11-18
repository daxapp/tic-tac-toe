import useAction from '../../hooks/useAction';
import './winner.scss'

const Winner = ({winner}) => {
    const {clearContainer} = useAction();

    return (
        <>

            <div className="underlayer"></div>
            <div className='modal-win'>
                <h1 className="info-winner">WIN {winner === 1? 'X' : 'O'}</h1>
                <button className='clear-container'  onClick={clearContainer}>Restart</button>
            </div>

        </>
    )
}

export default Winner;