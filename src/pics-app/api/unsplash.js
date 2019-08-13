import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 55b3f96450d4ff984a01ebb16485554b4208c793439655ea24e35259ac867591'
    }
});