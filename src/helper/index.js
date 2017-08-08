import fetch from 'node-fetch';

const setAuthHeader = (token) => {
    const authHeader = new Headers();
    return authHeader.append("Authorization" , token)
}

export default setAuthHeader