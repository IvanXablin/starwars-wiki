import axios from "axios";
import { TFilms } from "@/types/TFilms";
import { TCharacters } from "@/types/TCharacters";
import { TStarships } from "@/types/TStarships";
import { TPlanets } from "@/types/TPlanets";

class AxiosService {
    async getFilms(): Promise<TFilms[]> {
        const response = await axios.get("https://swapi.py4e.com/api/films");
        return response.data.results;
    }

    async getCharacters(page: number): Promise<TCharacters> {
        const response = await axios.get("https://swapi.py4e.com/api/people",{
            params: {
                page: page,
            }
        });
        return response.data;
    }

    async getPlanets(page: number): Promise<TPlanets> {
        const response = await axios.get("https://swapi.py4e.com/api/planets",{
            params: {
                page: page,
            }
        });
        return response.data;
    }

    async getStarships(page: number): Promise<TStarships> {
        const response = await axios.get("https://swapi.py4e.com/api/starships", {
            params: {
                page: page,
            }
        });
        return response.data;
    }
}

const axiosService = new AxiosService();

export default axiosService;

