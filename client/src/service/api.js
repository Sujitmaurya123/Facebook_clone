import axios from 'axios';
const url = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${url}/signup`, data)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}