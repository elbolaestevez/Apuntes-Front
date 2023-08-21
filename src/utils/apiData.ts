import axios from "axios";
import { University, Facultad } from "@/app/types/apiFormApuntes";
type DataItem = University | Facultad;

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export function fetchUniversidades(): Promise<DataItem[]> {
  return fetchData<DataItem[]>(
    "https://apiapn.copisterialowcost.info/Universidades"
  );
}

export function fetchFacultades(universidadId: number): Promise<DataItem[]> {
  return fetchData<DataItem[]>(
    `https://apiapn.copisterialowcost.info/Facultades?universidadId=${universidadId}`
  );
}

export function fetchGrados(facultadId: number): Promise<DataItem[]> {
  return fetchData<DataItem[]>(
    `https://apiapn.copisterialowcost.info/Grados?facultadId=${facultadId}`
  );
}

export function fetchCursos(gradoId: number): Promise<DataItem[]> {
  return fetchData<DataItem[]>(
    `https://apiapn.copisterialowcost.info/Cursos?gradoId=${gradoId}`
  );
}
