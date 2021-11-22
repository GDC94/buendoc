import { useState, useEffect } from 'react'
import { buenDocApi } from '../api/buenDocApi';
import { MedicalResponse, Professional } from '../interfaces/reqRes';



export const fetchAllMedicos = async (): Promise<Professional[]> => {
    const respuesta = await buenDocApi.get<MedicalResponse>('/professionals/');
    const listado = respuesta.data.results;
    return listado;
}

export const useMedicos = () => {
    const [isloading, setIsLoading] = useState(true);
    const [medicos, setMedicos] = useState<Professional[]>([]);

    useEffect(() => {
        fetchAllMedicos()
            .then(medicos => {
                setIsLoading(false);
                setMedicos(medicos)
            })
    }, [])

    return {
        isloading,
        medicos
    }
}



