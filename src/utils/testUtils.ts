import {promises as fs} from 'fs';
import path from 'path';

export async function loadTestData() {
    const dataPath = path.resolve(__dirname, '../data/testData.json');
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data);
}
