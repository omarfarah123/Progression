const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conection');

class Lecture extends Model {}

Lecture.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        lecture_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lecture_link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: '^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$'
              }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },    
        course_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'course',
                key: 'id',
            },
        },  
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'lecture',
    }
);

module.exports = Lecture;