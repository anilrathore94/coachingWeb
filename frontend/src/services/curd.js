import axios from "axios"

export const post = async (url, parameters, headers) => {
    try {
        const response = await axios.post(url, parameters, { headers: headers });
        return response.data;
    } catch (error) {
        return error;
    }

};



export const get = async (url, params, headers) => {
    try {
        const response = await axios.get(url, { headers: headers });
        return response.data;
    } catch (error) {
        return error;
    }
};
