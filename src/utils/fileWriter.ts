import fs from 'fs';
import { Parser } from 'json2csv'


export const saveAsCSV = (data: any[], filepath: string) => {
    const parser = new Parser({
        fields: Object.keys(data[0]),   
        });
    const csv = parser.parse(data);
    fs.writeFileSync(filepath, csv);
};