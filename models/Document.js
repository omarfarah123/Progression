const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conection');

class Document extends Model {}

Document.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        document_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        document_link: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^(https?\:\/\/)drive.google.com\/file\/d\/.*\/preview$/g
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
        modelName: 'document',
    }
);

module.exports = Document;