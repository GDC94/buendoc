
import { buenDocApi } from "../api/buenDocApi";
import { MedicalResponse } from "../interfaces/reqRes";


interface Props {
    pagenum: number
}

export const fetchPagination = async (pagenum: Props) => {
    const respuesta = await buenDocApi.get<MedicalResponse>(`/professionals/?page=${pagenum}`);
    const nuevapagina = respuesta.data.results;
    return nuevapagina;


}




