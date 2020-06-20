export const generateNis = ({ year, no }) => {
  const thisYear = new Date().getFullYear().toString()
  if (year === thisYear) {
    no = parseInt(no)
    no = no.toString() === 'NaN' ? 0 : no
    no += 1
    if ((no / 100) < 1) {
      if ((no / 10) < 1) {
        no = '00' + no // <10
      } else {
        no = '0' + no // >10
      }
    }
  } else {
    year = thisYear
    no = '001'
  }
  return `RQ.${year}.${no}`
}
