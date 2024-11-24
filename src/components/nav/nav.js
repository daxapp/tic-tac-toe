import './nav.scss';
import { useSelector } from 'react-redux';
import exitImg from '../../assets/icons/exit.png';
import whiteExitImg from '../../assets/icons/whiteExit.png'
import DarkMode from '../darkMode/darkMode';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const darkMode = useSelector(state => state.darkMode);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('night-mode');
        }
        return () => {
          document.body.classList.remove('night-mode');
        };
    }, [darkMode]);

    return (
        <nav className="nav">
            <div className='nav__item'>
                <div className="nav__img">
                    <img src={darkMode ? whiteExitImg : exitImg} alt='alt' />
                    <Link to={'/'} className='link'></Link>                    
                </div>
                <DarkMode/>

            </div>
        </nav>
    )
}

export default Nav;