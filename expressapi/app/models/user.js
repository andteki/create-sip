import { DataTypes } from 'sequelize'
import sequelize from '../database/database.js'

const User = sequelize.define('user', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    email: { type: DataTypes.STRING,  allowNull: true  },
    password: { type: DataTypes.STRING , allowNull: false },
    roleId: { type: DataTypes.INTEGER, defaultValue: 0 }
})

export default User
