const dotenv= require('dotenv');
dotenv.config();
module.exports={
    remote_db:process.env.REMOTE_DB,
    port:process.env.PORT,
    jwt_token: process.env.JWT_TOKEN,
}