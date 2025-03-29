import { fetchLibrettoData } from "./services/apiCreate";
import { getGuidsFromTable } from "./services/dbQueries"
import { jsonExtract } from "./services/jsonExtract";
import { saveAsCSV } from "./utils/fileWriter";
import { setTimeout } from 'timers/promises';

const BATCH_SIZE = 50; 
const DELAY_MS = 100; 

const run = async () => {
    try {
        const guids = await getGuidsFromTable();
        const trasfromedData = [];

        console.log(`Processing ${guids.length} GUIDs...`)
        
        for (let i = 0; i < guids.length; i++) {
            const guid = guids[i];
            try {
                const json = await fetchLibrettoData(guid);
                trasfromedData.push(jsonExtract(json));           
                if (i % BATCH_SIZE === 0 || i === guids.length - 1 ) {
                    console.log(`Processed ${i + 1}/${guids.length} (${Math.round((i + 1) / guids.length *100)}%)`);
                }
                await setTimeout(DELAY_MS);
            } catch (err) {
                console.error(`Skipped GUID ${guid}: `, err)
            }
            
        }

        if (trasfromedData.length === 0) {
            throw new Error('No data to save.');
        }

        saveAsCSV(trasfromedData, 'output.csv');
    } catch (err) {
        console.error('Pipeline failed:', err);
        process.exit(1);
    }
};

run();