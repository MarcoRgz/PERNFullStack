const {config} = require('dotenv');
config();

module.exports = {
    db:{
        user: process.env.DB_USER,
        password: process.env.DBPASSWORD
    }
}