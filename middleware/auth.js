import { verifyToken } from '../utils/jwt_auth'

export default function (req, res, next) {
  const token = req.header('Authorization')
  if (!token) return res.status(401).send('Access denied. No token provided.')

  try {
    const decoded = verifyToken(token)
    req.user = decoded
    next()
  } catch (ex) {
    res.status(400).send('Invalid token.')
  }
}
