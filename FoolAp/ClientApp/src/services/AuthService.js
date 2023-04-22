import axios from 'axios';


export default class AuthService {
    static async login(username, password) {
        const response = await axios.post(`/api/login`, { username, password });
        return response.data;
    }

    static async logout() {
        await axios.post(`/api/Users/logout`);
    }
}
