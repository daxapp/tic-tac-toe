import { Link } from "react-router-dom";

const WrongCode = () => {
    return (
        <>
            <h1>Введений неіснуючий код. Будь ласка попробуйте ще раз!</h1>
            <Link to='/'>Повернутись на головну</Link>
        </>

    )
}

export default WrongCode;