import { getGuidsFromTable } from "../services/dbQueries";


getGuidsFromTable()
    .then(guids => console.log(guids))
    .catch(err => console.error(err));