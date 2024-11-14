import './circle.scss';
import { useSelector } from 'react-redux';

const Circle = ({notNeon, bigger}) => {
    const darkMode = useSelector(state => state.darkMode)

    return (
        <div className={`circle ${bigger ? "bigger-o" :""}`}>
            <div className={`${darkMode && !bigger ? 'neon-circle dark' : 'neon-circle'} ${notNeon ? 'without-neon' : ''} `}>
                <div className="inner"></div>
            </div>
        </div>
    )
}


export default Circle;
