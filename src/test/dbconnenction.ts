import { connectDB } from "../config/dbCon";

async function testConnection() {
    await connectDB();
    console.log('Connection succefel!')
    
}

testConnection();