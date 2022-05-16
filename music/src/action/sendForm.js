import axios from "axios"

export const sendForm = async (email, login, text) => {
    try {
        const responseForm = await axios.post('http://localhost:8803', {email, login, text})
    } catch(e) {
        alert(e);
        alert ('press F to pay respects');
    }
}

export default sendForm;