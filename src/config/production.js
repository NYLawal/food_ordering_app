import dotenv from "dotenv"
dotenv.config()



export const production = {
  mongodb_connection_url: process.env.PRODUCTION_MONGODB_CONNECTION_URL,
  bycrypt_salt_round: +process.env.PRODUCTION_BCRYPT_SALT_ROUND,
  jwt_secret_key_restr: process.env.PRODUCTION_JWT_SECRET_RESTAURANT,
  jwt_secret_key_user: process.env.PRODUCTION_JWT_SECRET_USER,
  port:+process.env.PORT
}