import axios from 'axios';

export const registration = async (Email, Password, Login, Name) => {
    try {
        const response = await axios.post('http://localhost:8803', {Email, Password, Login, Name})
    } catch(e) {
        alert('Press F to pay respects');
    }
}

export const auth = async (Email, Password) => {
    try {
        const responseAuth = await axios.post('http://localhost:8803', {Email, Password})
    } catch (e) {
        alert('Press F to pay respects');
    }
}

export default registration;