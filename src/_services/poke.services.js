import axios from 'axios';
import { POKE_API_URL } from '../_constants';

export const pokeServices = {
    getAll,
    getById,
    getNextOffset
};

function getAll() {
    const requestObject = {
        method: 'GET',
        url: `${POKE_API_URL}/pokemon`
    };

    return axios(requestObject).then(handleResponse);
}

function getById(id) {
    const requestObject = {
        method: 'GET',
        url: `${POKE_API_URL}/pokemon/${id}`
    };

    return axios(requestObject).then(handleResponse);
}

function getNextOffset(offsetUrl) {
    const requestObject = {
        method: 'GET',
        url: `${offsetUrl}`
    };

    return axios(requestObject).then(handleResponse);
}

function handleResponse(response) {
    console.log(response.data);
    return response.data
}
