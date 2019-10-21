import axios from 'axios';

export function uploadFile(data) {
    return axios({
        url: `https://jsonplaceholder.typicode.com/posts/1`,
        method: 'put',
        data
    });
}
