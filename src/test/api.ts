import { fetchLibrettoData } from "../services/apiCreate";


const testGuid = '27dd415b-26bb-815d-e428-b10ba004a3ad';

fetchLibrettoData(testGuid)
    .then(data => console.log(data))