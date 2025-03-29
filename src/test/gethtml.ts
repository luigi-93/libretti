import axios from "axios"
import dotenv from 'dotenv';

dotenv.config();

export const fetchLibrettoDatahtml = async () => {
    try {
        const response = await axios.get('https://libretti.dc3.unico3.cloud/?guid=3fed3143-a56d-0537-1b37-05ca40706fcf' );
        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
    
}

fetchLibrettoDatahtml()
    .then(data => console.log(data))