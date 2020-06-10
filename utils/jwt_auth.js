import jwt from 'jsonwebtoken'

export const getToken = (headers) => {
  return headers?.authorization
}
export const getDecodeToken = (token, config = { complete: true }) => {
  return jwt.decode(token, config)
}
// async
export const verifyToken = (token) => {
  const privateKey = process.env.JWT_PRIVATE_KEY
  return jwt.verify(token, privateKey)
}
export const generateToken = (data, config = { expiresIn: '1h' }) => {
  const privateKey = process.env.JWT_PRIVATE_KEY
  return jwt.sign(data, privateKey, config)
}
