
import dotenv from 'dotenv'
import { verifyToken } from '../utils/jwt_auth'
dotenv.config()

export default function (req, res, next) {
  const token = req.header('Authorization')
  if (!token && process.env.AUTH_MIDDLEWARE !== '0') {
    return res.status(401).json({
      message: 'Access denied. No token provided.'
    })
  }

  try {
    const decoded = verifyToken(token)
    req.authorization = req.header('Authorization')
    req.user = decoded
    next()
  } catch (ex) {
    if (process.env.AUTH_MIDDLEWARE !== '0') {
      res.status(401).json({
        message: 'Invalid Token.'
      })
    }
  }
}
