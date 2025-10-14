import app from './app.js'
import dotenv from '@dotenvx/dotenvx'

dotenv.config({ quiet: true })

const PORT = process.env.APP_PORT || 8000

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
