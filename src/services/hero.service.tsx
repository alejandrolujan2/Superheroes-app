import axios from "axios";

const TOKEN = "638e4147fb2526bebe2ed3f090d8d97d";

export const getHero = async (id: string) => {

    const response = await axios.get(
        `https://superheroapi.com/api/${TOKEN}/${id}`
    );

    return response.data;
};