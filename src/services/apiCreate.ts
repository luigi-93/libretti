import axios from "axios"
import dotenv from 'dotenv';

dotenv.config();

export const fetchLibrettoData = async (guid: string) => {
    try {
        const response = await axios.get(`https://archivio-libretti.azurewebsites.net/api/impianti/${guid}/libretto/1.2/` ,
            {
                headers: {
                    'Accept': 'application/json',
                    'Origin': 'https://archivio-libretti.azurewebsites.net',
                    'Referer': 'https://archivio-libretti.azurewebsites.net/',
                }
            }
        );
        return response.data;
    } catch (err) {
        console.error(`Failed to fetch data for GUID ${guid}:`, err);
        throw err;
    }
    
}