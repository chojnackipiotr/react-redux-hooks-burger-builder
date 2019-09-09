import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-a4685.firebaseio.com/'
});

export default instance;