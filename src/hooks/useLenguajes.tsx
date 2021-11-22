import {useState, useEffect} from 'react'
import { buenDocApi } from '../api/buenDocApi';
import { Lenguajes } from '../interfaces/reqRes';


export const useLenguajes = () => {
    const [lenguajes, setLenguajes] = useState<Lenguajes[]>([]);
    
    const loadlenguajes = async () => {
        const response = await buenDocApi.get<Lenguajes[]>('/languages/');
        setLenguajes(response.data);
    }
    useEffect(() => {
        loadlenguajes();
    }, [])
    

    return {
        lenguajes
    }
}
