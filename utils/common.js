export const ID = () => {
  if (new Date().getTime() % 2) {
    return (Math.random() + new Date().getTime()).toString(36).substr(2)
  } else {
    return (new Date().getTime() + Math.random()).toString(36).substr(2)
  }
}
