import sql from 'mssql';
import { connectDB } from '../config/dbCon';

export const getGuidsFromTable = async () => {
    try {
        await connectDB();

        const result = await sql.query`SELECT T051C131 from dbo.Tab051`;
        return result.recordset.map(row => row.T051C131).filter(guid => guid !== null)
    } catch (err) {
        console.error('Query get guids failed:', err);
        throw err;
    } 
    
}