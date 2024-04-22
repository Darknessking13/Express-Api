require('dotenv').config();

module.exports= {
    token: process.env.Domain ,
    mongourl: process.env.Mongo_url,
    redis_host: process.env.Redis_host,
    redis_port: process.env.Redis_port,
    redis_password: process.env.Redis_password,
}