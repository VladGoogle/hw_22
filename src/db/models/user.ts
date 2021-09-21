import { Sequelize, Model, DataTypes } from "sequelize";
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

export class User extends Model {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public email!: string;
    public img!: string;
}

export interface UserObj{
    id: number; // Note that the `null assertion` `!` is required in strict mode.
    name:string;
    email:string;
    img:string;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: new DataTypes.STRING(255),
            allowNull: false,
        },
        img: {
            type: new DataTypes.STRING(255),
            allowNull: true,
        }
    },
    {
        tableName: "Users",
        sequelize, // passing the `sequelize` instance is required
    }
);
