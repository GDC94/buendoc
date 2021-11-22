import { useEffect, useState } from 'react'
import { buenDocApi } from '../api/buenDocApi'
import { ProfesionalLenguajes} from '../interfaces/reqRes'


export const useMedicoLenguajes = ( medicoId: number) => {
    const [lenguajesdelmedico, setLenguajesDelMedico] = useState<ProfesionalLenguajes[]>([]);

    const loadLenguajesDelMedico = async () => {
        const respuesta = await buenDocApi.get<ProfesionalLenguajes[]>(`/professional-languages/?professional__id=${medicoId}`);
        setLenguajesDelMedico(respuesta.data); 
    }
    useEffect(() => {
        loadLenguajesDelMedico();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
        lenguajesdelmedico
    }
};