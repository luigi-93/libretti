import sql from 'mssql';

export const getGuidsFromTable = async () => {
    const result = await sql.query`SELECT T051C131 FROM dbo.Tab051`;
    return result.recordset.map(row => row.T051C131)
}