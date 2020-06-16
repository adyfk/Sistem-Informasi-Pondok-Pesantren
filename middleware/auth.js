
import dotenv from 'dotenv'
import { verifyToken } from '../utils/jwt_auth'
dotenv.config()

export default function (req, res, next) {
  if (process.env.AUTH_MIDDLEWARE === '0') {
    next()
    return
  }

  const token = req.header('Authorization')
  if (!token) {
    return res.status(401).json({
      message: 'Access denied. No token provided.'
    })
  }

  try {
    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (ex) {
    res.status(401).json({
      message: 'Invalid Token.'
    })
  }
}
