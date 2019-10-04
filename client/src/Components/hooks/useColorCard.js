
import useLocalStorage from './useLocalStorage';
import {useEffect} from 'react'

const useColorCard = (key) => { 
    const [value, setStoredValue] = useLocalStorage(key);

    useEffect(() => {
        if(value){
           document.body.classList.add("colorCard");
        }
        else{
            document.body.classList.remove("colorCard");
        }

    }, [value]);

    const setValue = value => {

        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))

    } 
    return [value, setValue];
}

export default useColorCard;

