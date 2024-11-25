import './nav.scss';
import { useSelector } from 'react-redux';
import exitImg from '../../assets/icons/exit.png';
import whiteExitImg from '../../assets/icons/whiteExit.png'
import DarkMode from '../darkMode/darkMode';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SoundSwitch from '../soundSwitch/SoundSwitch';

const Nav = () => {
    const { darkMode, isSound} = useSelector(state => state);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('night-mode');
        }
        return () => {
          document.body.classList.remove('night-mode');
        };
    }, [darkMode]);

    useEffect(() => {
        if (isSound) {
            document.body.classList.add('sound-mode');
        }
        return () => {
          document.body.classList.remove('sound-mode');
        };
    }, [isSound]);

    return (
        <nav className="nav">
            <div className='nav__item'>
                <div className="nav__img">
                    <img src={darkMode ? whiteExitImg : exitImg} alt='alt' />
                    <Link to={'/'} className='link'></Link>                    
                </div>
                <DarkMode/>
                <SoundSwitch />

            </div>
        </nav>
    )
}

export default Nav;