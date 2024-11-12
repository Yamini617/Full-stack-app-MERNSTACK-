import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
config()
const {verify}=jwt
export function verifyToken(req, res, next) {
    //token verification logic
    //get bearer token from req
    const bearerToken = req.headers.authorization;
    //if bearerToken not found,its a unauthorized req
    if (bearerToken === undefined) {
      res.status(401).send({ message: "Unautnorized access" });
    }
    //if bearer token existed, then extract token
    const token = bearerToken.split(" ")[1];
    //verify the token with secret key
    try {
      //if token is decoded, it means token is valid
      const decodedToken = verify(token,process.env.SECRET_KEY);
      console.log(decodedToken)
      //call next middleware
      next();
    } catch (err) {
      res.send({ message: "token expired..plz relogin", error: err });
    }
  }