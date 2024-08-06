import fs from 'fs';
import path from 'path';

const configPath = path.resolve('./config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
;

const repoOwner = 'vijaywhat';
const repoName = 'vj-datas';
const filePath = 'credentials.json';
const accessToken = config.GITHUB_TOKEN;
const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/${filePath}`;

fetch(apiUrl, {
    headers: {
        'Authorization': `token ${accessToken}`
    }
})
.then(response => response.json())
.then(data => {
    const content = Buffer.from(data.content, 'base64').toString('utf-8');
    const jsonData = JSON.parse(content);
    console.log("User Data:", jsonData);
})
.catch(error => console.error('Error fetching data:', error));
