import app from './app.js'
import dotenvFlow from 'dotenv-flow'

dotenv.config()

const PORT = process.env.APP_PORT || 8000

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
