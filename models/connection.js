const Sequelize = require('sequelize');
const PostgresDialect = require('@sequelize/postgres').PostgresDialect;

// const sequelize = new Sequelize('mysql', 'sajid', process.env.DB_PASSWORD, {
//   dialect: 'mssql',
//   host: 'techdailybackend.database.windows.net',
//   port: '1433',
//   dialectOptions: {
//     encrypt: true,
//   },
//   logging: true,
// });

// const sequelize = new Sequelize('techdailybackend', 'root', '', {
//   dialect: 'mysql',
//   host: 'localhost',
//   port: '3306',
// });

// const sequelize = new Sequelize(`postgresql://postgres:${process.env.DB_PASSWORD}@db.kahxlnzgcmsuthpnenjd.supabase.co:5432/postgres`)

// const sequelize = new Sequelize(
//   `postgresql://postgres:${process.env.DB_PASSWORD}@db.kahxlnzgcmsuthpnenjd.supabase.co:5432/postgres`,
//   {
//     dialect: 'postgresql',
//     host: 'db.kahxlnzgcmsuthpnenjd.supabase.co',
//     port: '5432',
//   }
// );

// const sequelize = new Sequelize(
//   `postgresql://postgres:${process.env.DB_PASSWORD}@db.kahxlnzgcmsuthpnenjd.supabase.co:5432/postgres`,
//   {
//     dialect: PostgresDialect,
//     host: 'db.kahxlnzgcmsuthpnenjd.supabase.co',
//     database: 'postgres',
//     port: '5432',
//     user: 'postgres',
//     ssl: true,
//     password: process.env.DB_PASSWORD,
//     clientMinMessages: 'notice',
//   }
// );

const sequelize = new Sequelize(`postgresql://postgres.kahxlnzgcmsuthpnenjd:${process.env.DB_PASSWORD}@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres`)

module.exports = sequelize;
