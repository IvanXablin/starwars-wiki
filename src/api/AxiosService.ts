import axios from "axios";
import {TFilms} from "@/types/TFilms";

class AxiosService {
    async getFilms(): Promise<TFilms[]> {
        const response = await axios.get("https://swapi.dev/api/films");
        return response.data.results;
    }
}

const axiosService = new AxiosService();

export default axiosService;

