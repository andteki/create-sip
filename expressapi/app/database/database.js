import Sequelize from 'sequelize'
import dotenv from '@dotenvx/dotenvx'

if (process.env.NODE_ENV === 'test') {
    dotenv.config({ path: '.env.test', quiet: true })
}else {
    dotenv.config({ quiet: true })    
}

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_STORAGE,
        host: process.env.DB_HOST,
        logging: process.env.APP_LOG === 'true' ? console.log : false,
        dialectOptions: {}
    }
)

export default sequelize
