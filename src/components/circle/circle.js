import './circle.scss';
import { useSelector } from 'react-redux';

const Circle = ({notNeon, big}) => {
    const darkMode = useSelector(state => state.darkMode)

    return (
        <div className={`circle`}>
            <div className={`${darkMode ? 'neon-circle dark' : 'neon-circle'} ${notNeon ? 'without-neon' : ''} `}>
                <div className="inner"></div>
            </div>
        </div>
    )
}


export default Circle;
