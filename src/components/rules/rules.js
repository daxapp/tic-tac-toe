import rule1 from '../../assets/img/rule1.png';
import rule2 from '../../assets/img/rule2.png';
import rule3 from '../../assets/img/rule3.png';
import exitImg from '../../assets/icons/exit.png';
import './rules.scss'
import { Link } from 'react-router-dom';

const Rules = () => {
    return (
    <>
        <div className="nav__img rules__exit">
            <img src={exitImg} alt='alt' />
            <Link to={'/'} className='link'></Link>                    
        </div>
        <div className="rules">
            <h1 className="rules__title">RULES</h1>
            <div className='rules__box'><img src={rule1} alt='1'/></div>
            <div className='rules__box'><img src={rule2} alt='1'/></div>
            <div className='rules__box'><img src={rule3} alt='1'/></div>
        </div>
    </>

    )
}

export default Rules;