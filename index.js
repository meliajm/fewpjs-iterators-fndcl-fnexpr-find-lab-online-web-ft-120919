// const testVar = {}

// function 
// () {
//   return "hi"
// }

let superbowlWin = (record) => {
  const record_row = (record.find(function(s) { return s.result === 'W'}))
  if (record_row === undefined) {
    return undefined
  } else {
    return record_row.year
  }

}
