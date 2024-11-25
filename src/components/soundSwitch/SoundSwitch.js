import soundoff from "../../assets/icons/sound-off-svgrepo-com.svg"
import soundon from "../../assets/icons/sound-svgrepo-com.svg";
import soundoffWhite from '../../assets/icons/sound-off-svgrepo-com (1).svg'
import soundonWhite from '../../assets/icons/sound-svgrepo-com (1).svg'
import useAction from '../../hooks/useAction';
import { useSelector } from "react-redux";
import './soundSwitch.scss'

const SoundSwitch = () => {
    const darkMode = useSelector((state) => state.darkMode);
    const {setIsSound} = useAction()

    return (
        <div className="tumbler-wrapper" onClick={setIsSound}>  
        <div className="tumbler-s"></div>
        <img
            src={darkMode ? soundon :  soundonWhite}
            alt="Sound On"
        />

        <img
            src={darkMode ?  soundoff : soundoffWhite}
            alt="Sound Off"
        />
    </div>
    

    )
}

export default SoundSwitch;