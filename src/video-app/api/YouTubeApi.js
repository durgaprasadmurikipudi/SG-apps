import axios from 'axios';

const KEY = 'AIzaSyBEX-V_96vH-BIxo2weLK_lCL38OgqBjwg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 5    
    }
});