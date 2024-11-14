import './cross.scss';
import { useSelector } from 'react-redux';

const Cross = ({notNeon, class1}) => {
    const darkMode = useSelector(state => state.darkMode)

    return (
        <div className={`${darkMode ? 'cross dark' : 'cross'} ${notNeon ? 'without-neon' : ''} ${class1}`}>
            <div className="inner"></div>
        </div>
    )
}

export default Cross;