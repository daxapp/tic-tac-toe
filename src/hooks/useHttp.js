import database from "../firebase";
import { ref, onValue, set } from "firebase/database";
import useAction from "./useAction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const useHttp = () => {
    const navigate = useNavigate()
    const { setDataFromDB, setCliked } = useAction();
    const subscribeToDataFromDB = (path) => {
        setCliked(false)
        return new Promise((resolve, reject) => {
            const dbRef = ref(database, path);
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                setDataFromDB(data);
                resolve(data !== null);
            }, (error) => {
                console.error("Error subscribing to data: ", error);
                reject(error);
            });
        });
    };

    const checkDataFromDB = (path) => {
        return new Promise((resolve, reject) => {
            const dbRef = ref(database, path);
            onValue(dbRef, (snapshot) => {
                const data = snapshot.val();
                resolve(data !== null);
            }, (error) => {
                console.error("Error subscribing to data: ", error);
                reject(error);
            });
        });
    };

    const setDataInDB = (path, data) => {
        return set(ref(database, path), {
            ...data,
        });
    }

    const createServer = (pathStart, pathNewGame) => {
        const dbRef = ref(database, pathStart);
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setDataInDB(pathNewGame, data)
        }, (e) => console.log(e))
    }
    return {subscribeToDataFromDB, setDataInDB, createServer, checkDataFromDB}
}


export default useHttp;