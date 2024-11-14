import './square.scss';

const Square = ({content}) => {
    return (
        <button className='square'>
            {content ? content : '-'}
        </button>
    )
}

export default Square;