import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': 'f66883a8f4mshec29cfbb4bc02eap1c2f7djsnb7f32e2002a7',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});


export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,
    options);
    return data;
}