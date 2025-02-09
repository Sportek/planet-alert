import { Incident } from "@/components/map";
import axiosInstance from "@/lib/axios";

const getIncidents = async () => {
  const response = await axiosInstance.get<Incident[]>('/incidents')
  return response.data;
}

export default getIncidents;
