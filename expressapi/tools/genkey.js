import fs from 'fs/promises'
import { generateApiKey } from 'generate-api-key'

const fileName = new URL('../config/default.json', import.meta.url).pathname

function generateKey(size = 32, format = 'base64') {
    const buffer = crypto.randomBytes(size);
    return buffer.toString(format);
}

fs.readFile(fileName)
    .then(body => JSON.parse(body))
    .then(json => {
        json.app.key = generateApiKey({method: 'bytes', length: 32})
        return json
    })
    .then(json => JSON.stringify(json, null, 4))
    .then(body => fs.writeFile(fileName, body, 'utf8'))
    .catch(error => console.log(error))
