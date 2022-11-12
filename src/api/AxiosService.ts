import axios from "axios";
import { TFilms } from "@/types/TFilms";
import { TCharacters } from "@/types/TCharacters";
import { TStarships } from "@/types/TStarships";
import { TPlanents } from "@/types/TPlanents";

class AxiosService {
    async getFilms(): Promise<TFilms[]> {
        const response = await axios.get("https://swapi.dev/api/films");
        return response.data.results;
    }

    async getCharacters(): Promise<TCharacters> {
        const response = await axios.get("https://swapi.dev/api/people");
        return response.data;
    }

    async getPlanets(): Promise<TPlanents[]> {
        const response = await axios.get("https://swapi.dev/api/planets");
        return response.data.results;
    }

    async getStarships(): Promise<TStarships[]> {
        const response = await axios.get("https://swapi.dev/api/starships");
        return response.data.results;
    }
}

const axiosService = new AxiosService();

export default axiosService;

