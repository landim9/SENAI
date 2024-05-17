import axios from 'axios';
import md5 from 'md5';

const PUBLIC_KEY = 'b5632ada08252f66e7f18c73ab201aa6';
const PRIVATE_KEY = '5dd439a27b2d8085c6ee6bf847d85450fbfc7935';

const ts = new Date().getTime();
const hash = md5()

const api = axios.create(
    {
        baseURL: 'https://gateway.marvel.com/v1/public',
        params: {
            ts: ts,
            apikey: PUBLIC_KEY,
            hash: hash
        }
    }
);

export const getCharacters = async (offset = 0, limit = 100) => {
    try {
        const response = await api.get('/characters', {
            params: {
                offset: offset,
                limit: limit
            }
        });
        return response.data.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

