import './cross.scss';
import { useSelector } from 'react-redux';

const Cross = ({notNeon, bigger}) => {
    const darkMode = useSelector(state => state.darkMode)

    return (
        <div className={`${darkMode && !bigger ? 'cross dark' : 'cross'} ${notNeon ? 'without-neon' : ''} ${bigger ? 'bigger-x' : ""}`}>
            <div className="inner"></div>
        </div>
    )
}

export default Cross;