export function ReqException (error) {
  this.message = error.message
  this.status = error.status
}

export function checkErrorRequest (error) {
  return error instanceof ReqException ? null : error
}
